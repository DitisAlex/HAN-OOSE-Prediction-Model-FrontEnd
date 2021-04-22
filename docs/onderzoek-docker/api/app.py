from flask import Flask
app = Flask(__name__)

# Test db connection
from typing import List, Dict
import mysql.connector
import json

def get_users() -> List[Dict]:
  config = {
    'user': 'root',
    'password': 'root',
    'host': 'mysql-db',
    'port': '3306',
    'database': 'test_db'
  }
  connection = mysql.connector.connect(**config)
  cursor = connection.cursor()
  cursor.execute('SELECT * FROM user')
  results = [{id: username} for (id, username, password) in cursor]
  cursor.close()
  connection.close()

  return results



@app.route('/')
def index() -> str:
    return json.dumps({'users': get_users()})


if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')
