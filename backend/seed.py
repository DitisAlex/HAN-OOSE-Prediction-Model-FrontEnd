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

# Insert data
cur.execute("INSERT INTO users VALUES (datetime('now'), 'rowan','password',1)")

cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 09:45:14', 10.38, 36, 4.73, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 10:45:14', 9.62, 32, 4.16, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 11:45:14', 8.31, 27, 3.45, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 12:45:14', 6.68, 22, 3.05, 1024)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 13:45:14', 4.92, 17, 2.7, 1024)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 14:45:14', 3.32, 12, 2.45, 1024)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 15:45:14', 3.3, 13, 2.22, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 16:45:14', 3.87, 57, 2.37, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 17:45:14', 4.76, 74, 2.29, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 18:45:14', 5.17, 83, 2.4, 1022)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 19:45:14', 5.34, 87, 2.16, 1022)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 20:45:14', 5.5, 90, 1.95, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 21:45:14', 5.91, 91, 2.16, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 22:45:14', 6.73, 100, 1.95, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-20 23:45:14', 8.15, 100, 1.79, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 0:45:14', 9.94, 100, 1.88, 1023)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 1:45:14', 12.36, 98, 2.2, 1022)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 2:45:14', 12.69, 96, 2.53, 1022)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 3:45:14', 12.69, 96, 2.53, 1022)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 4:45:14', 12.42, 97, 2.96, 1022)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 5:45:14', 13.59, 82, 2.87, 1022)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 6:45:14', 13.64, 89, 3.26, 1021)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 7:45:14', 13.71, 82, 3.55, 1021)")
cur.execute(
    "INSERT INTO weather VALUES ('2021-04-21 8:45:14', 13.46, 73, 4.08, 1021)")

# Save (commit) the changes
con.commit()

# Close the connection
con.close()
