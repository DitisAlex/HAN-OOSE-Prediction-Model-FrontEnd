import sqlite3
con = sqlite3.connect('database.db')

cur = con.cursor()

con.execute("DROP TABLE users")
con.execute("DROP TABLE weather")

# Create tables
cur.execute('''CREATE TABLE IF NOT EXISTS users
               (signupDate text, name text, password text, isAdmin integer)''')

cur.execute('''CREATE TABLE IF NOT EXISTS weather
               (date text,temperature real, cloud integer, wind real, airPressure integer)''')

# Save (commit) the changes
con.commit()

# Close the connection
con.close()
