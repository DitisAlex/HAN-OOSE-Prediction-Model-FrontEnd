# SQLite

For the web interface we are using SQLite database for all information. SQLite is an open-source, zero-configuration, self-contained, stand-alone, transaction relational database engine designed to be embedded into an application. Currently there is a SQLite database available on the Raspberry Pi with the grid and EV data, this data is periodically copied in to the database of our project because changing the code on the Raspberry Pi is outside of this project.

There are several seed files available in the `backend/db/seed` folder:

- `seed.py` creates the normal database with tables and adds some initial data
- `seedTest.py` creates the test database with tables and adds some initial data
- `seedAll.py` runs both `seed.py` & `seedTest.py` files
- `seedTables.py` only creates the normal database with tables without any data
- `seedTablesTest.py` only creates the test database with tables without any data

In the files you can uncomment certain lines in the first function in order to skip certain tables if you want to. These files can also be called from scripts or other Python files (for example, for tests).

The main questions is how to implement SQLite in our program, a sub question is how does SQLite work and how is it implemented in a Python application. I have done some literally and lab research to find out the questions named above.

## Installation

Installing SQLite is quite simple since there is no need for a seperate process in the background to run the program, everything is simpely read from the `.db` file. The site [SQLite Tutorial](https://www.sqlitetutorial.net/) has some simple tutorials for installing and using SQLite. You can install by downloading a SQLite reader, such as SQL Studio. In order to access it using code you can use the build in flask sqlite3 method. Underneath is a small sample of how to do that (from the seed.py file):

```python
import sqlite3

con = sqlite3.connect('../database.db')

cur = con.cursor()
con.execute("DROP TABLE IF EXISTS users")

con.commit()
```

`con` is the connection to the databaser, `cur` is a cursor which is the database object on which you do the actions inside python. When you do `commit()` it saves it into the database.

An issue with SQLite are that it doesn't allow the database to process multiple queries at a time since it is just a file and not a service. This should however not be a problem for us since we use a single threaded application and don't have any users-input that needs to be put into the database.

## Schema

The database exists out of several tables which are descriped below.

### Users

The users table saves the signup date, username, password and whether the user is an administrator. Currently there are only plans to create a administrator user, but adding a normal user is also possible (for a future project where that would be necessary). The column `sign_up_date` can be filled with `datetime('now')`.

| NAME         | DATA TYPE | NOT NULL           |
| ------------ | --------- | ------------------ |
| sign_up_date | text      | :white_check_mark: |
| name         | text      | :white_check_mark: |
| password     | text      | :white_check_mark: |
| isAdmin      | integer   | :x:                |

### Weather

The weather data saves the data that the system gets from the weather API. These are forecasts for the next 24 hours that are being used for the prediction model. Date is saved like the ISO format (the same you get with `datetime('now')` in SQLite).

| NAME        | DATA TYPE | NOT NULL           |
| ----------- | --------- | ------------------ |
| date        | text      | :white_check_mark: |
| temperature | real      | :white_check_mark: |
| cloud       | integer   | :white_check_mark: |
| wind        | real      | :white_check_mark: |
| pressure    | integer   | :white_check_mark: |

### Grid

The Grid table is taken from the database on the Raspberry and contains the data from the grid. The data is in it's original format like on the old project. The `[No]` column is a sort id column and auto increments.

| NAME | DATA TYPE          | NOT NULL | PRIMARY KEY        |
| ---- | ------------------ | -------- | ------------------ |
| [No] | integer            | :x:      | :white_check_mark: |
| Time | [unsigned big int] | :x:      | :x:                |
| V1   | REAL               | :x:      | :x:                |
| V2   | REAL               | :x:      | :x:                |
| V3   | REAL               | :x:      | :x:                |
| I1   | REAL               | :x:      | :x:                |
| I2   | REAL               | :x:      | :x:                |
| I3   | REAL               | :x:      | :x:                |
| P1   | REAL               | :x:      | :x:                |
| P2   | REAL               | :x:      | :x:                |
| P3   | REAL               | :x:      | :x:                |
| Q1   | REAL               | :x:      | :x:                |
| Q2   | REAL               | :x:      | :x:                |
| Q3   | REAL               | :x:      | :x:                |
| S1   | REAL               | :x:      | :x:                |
| S2   | REAL               | :x:      | :x:                |
| S3   | REAL               | :x:      | :x:                |
| PF1  | REAL               | :x:      | :x:                |

### prediction_data

The prediction data table stores the prediction made by the AI model. The `predicted_on` is the date on which the production was performed, the `predicted_date` is the date for which the prodiction was made and `prediction` is the prediction.

| NAME           | DATA TYPE | NOT NULL           |
| -------------- | --------- | ------------------ |
| predicted_on   | text      | :white_check_mark: |
| predicted_date | text      | :white_check_mark: |
| prediction     | real      | :white_check_mark: |

## Conclusion

In conclusing, SQLite is a really light weight SQL database that uses almost the exact same commands as SQL. Using Python with SQLite is really easy and doesn't even require installing anything more than Flask itself. There are some issues like commiting multiple things at once, which is impossible but for our single threaded application that shouldn't be a big issue.
