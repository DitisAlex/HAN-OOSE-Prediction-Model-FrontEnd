import sqlite3
con = sqlite3.connect('database.db')

cur = con.cursor()

con.execute("DROP TABLE IF EXISTS users")
con.execute("DROP TABLE IF EXISTS weather")
con.execute("DROP TABLE IF EXISTS battery")
con.execute("DROP TABLE IF EXISTS grid")
con.execute("DROP TABLE IF EXISTS pv")

# Create tables
cur.execute('''CREATE TABLE IF NOT EXISTS users
               (signupDate  TEXT    NOT NULL, 
               name         TEXT    NOT NULL, 
               password     TEXT    NOT NULL, 
               isAdmin      INTEGER)''')

cur.execute('''CREATE TABLE IF NOT EXISTS weather
               (date        TEXT     NOT NULL,
               temperature  REAL     NOT NULL, 
               cloud        INTEGER  NOT NULL, 
               wind         REAL     NOT NULL, 
               pressure     INTEGER  NOT NULL)''')

# (tables from the old database)
cur.execute('''CREATE TABLE IF NOT EXISTS grid (
    [No] INTEGER            PRIMARY KEY AUTOINCREMENT,
    Time [UNISGNED BIG INT],
    V1   REAL,
    V2   REAL,
    V3   REAL,
    I1   REAL,
    I2   REAL,
    I3   REAL,
    P1   REAL,
    P2   REAL,
    P3   REAL,
    Q1   REAL,
    Q2   REAL,
    Q3   REAL,
    S1   REAL,
    S2   REAL,
    S3   REAL,
    PF1  REAL,
    PF2  REAL,
    PF3  REAL,
    F    REAL
)''')

cur.execute('''CREATE TABLE IF NOT EXISTS pv (
    [No] INTEGER            PRIMARY KEY AUTOINCREMENT,
    Time [UNISGNED BIG INT],
    V1   REAL,
    V2   REAL,
    V3   REAL,
    I1   REAL,
    I2   REAL,
    I3   REAL,
    P1   REAL,
    P2   REAL,
    P3   REAL,
    Q1   REAL,
    Q2   REAL,
    Q3   REAL,
    S1   REAL,
    S2   REAL,
    S3   REAL,
    PF1  REAL,
    PF2  REAL,
    PF3  REAL,
    F    REAL
)''')

# Insert data
cur.execute(
    "INSERT INTO users VALUES (datetime('now'), 'rowan','password',1)")

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

cur.execute(
    '''INSERT INTO grid VALUES(1, 1617589974, 234.6, 234.2, 234.3, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, -0.017, -0.008, -0.026, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(2, 1617590077, 234.5, 234.1, 234.4, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, -0.042, 0.028, -0.031, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(3, 1617590190, 234.5, 234.0, 234.4, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, -0.001, 0.039, -0.036, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(4, 1617590275, 234.6, 234.0, 234.5, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, 0.007, 0.015, -0.033, 50.03)''')
cur.execute(
    '''INSERT INTO grid VALUES(5, 1617590375, 234.6, 234.1, 234.5, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, 0.007, 0.015, -0.033, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(6, 1617590465, 234.6, 234.1, 234.5, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, 0.007, 0.015, -0.033, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(7, 1617590558, 234.7, 234.1, 234.5, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, -0.029, 0.012, -0.045, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(8, 1617590661, 234.6, 234.1, 234.5, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, 0.007, 0.027, -0.03, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(9, 1617590964, 234.6, 234.1, 234.5, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, -0.009, 0.03, -0.04, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(10, 1617591036, 234.0, 233.8, 234.0, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, 0.031, 0.037, -0.031, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(11, 1617591370, 234.5, 234.0, 234.2, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, 0.009, 0.017, -0.031, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(12, 1617591450, 234.6, 234.2, 234.5, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, -0.003, 0.027, -0.036, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(13, 1617591613, 234.8, 234.5, 234.6, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, 0.001, 0.003, -0.027, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(14, 1617591700, 234.4, 234.1, 234.3, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, -0.005, 0.024, -0.04, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(15, 1617591784, 234.2, 234.0, 234.1, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, -0.005, 0.024, -0.04, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(16, 1617591925, 234.1, 233.7, 234.0, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, 0.009, 0.016, -0.029, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(17, 1617592002, 233.9, 233.5, 233.7, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, 0.004, 0.003, -0.052, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(18, 1617592081, 234.1, 233.6, 233.9, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, 0.004, 0.003, -0.052, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(19, 1617592162, 234.1, 233.7, 234.0, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 180.0, 180.0, 0.004, 0.003, -0.052, 50.0)''')
cur.execute(
    '''INSERT INTO grid VALUES(20, 1617592289, 234.0, 233.6, 233.9, 0.81, 0.75, 0.84, 0.0, 0.0, 0.0, 180.0, 150.0, 180.0, 180.0, 150.0, 180.0, 0.021, 0.024, -0.039, 50.0)''')

cur.execute(
    '''INSERT INTO pv  VALUES (1, 1617589961, 234.5, 234.2, 234.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (2, 1617590041, 234.3, 233.9, 234.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (3, 1617590152, 234.5, 234.1, 234.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (4, 1617590248, 234.6, 234.1, 234.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.03)''')
cur.execute(
    '''INSERT INTO pv  VALUES (5, 1617590361, 234.5, 234.1, 234.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (6, 1617590512, 234.7, 234.2, 234.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (7, 1617590625, 234.5, 234.1, 234.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (8, 1617590739, 234.7, 234.2, 234.6, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (9, 1617590788, 234.5, 234.2, 234.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (10, 1617590917, 234.2, 234.0, 234.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (11, 1617591008, 234.1, 233.8, 234.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.03)''')
cur.execute(
    '''INSERT INTO pv  VALUES (12, 1617591103, 234.3, 233.9, 234.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (13, 1617591250, 234.3, 233.9, 234.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (14, 1617591587, 234.8, 234.5, 234.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (15, 1617591682, 234.6, 234.2, 234.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (16, 1617591766, 234.2, 234.2, 234.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (17, 1617591908, 234.2, 233.8, 234.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (18, 1617592126, 234.0, 233.7, 234.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (19, 1617592251, 233.9, 233.6, 234.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')
cur.execute(
    '''INSERT INTO pv  VALUES (20, 1617592536, 234.0, 233.7, 234.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 50.0)''')

# Save (commit) the changes
con.commit()

# Close the connection
con.close()

print("Finished")
