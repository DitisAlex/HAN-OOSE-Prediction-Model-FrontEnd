# Database

For the web interface we are using SQLite database for all information. SQLite is an open-source, zero-configuration, self-contained, stand-alone, transaction relational database engine designed to be embedded into an application. Currently there is a SQLite database available on the Raspberry Pi with the grid and EV data, this data is periodically copied in to the database of our project because changing the code on the Raspberry Pi is outside of this project.

There are several seed files available in the `backend/db/seed` folder:

- `seed.py` creates the normal database with tables and adds some initial data
- `seedTest.py` creates the test database with tables and adds some initial data
- `seedAll.py` runs both `seed.py` & `seedTest.py` files
- `seedTables.py` only creates the normal database with tables without any data
- `seedTablesTest.py` only creates the test database with tables without any data

In the files you can uncomment certain lines in the first function in order to skip certain tables if you want to. These files can also be called from scripts or other Python files (for example, for tests).

## Installation

Installing SQLite is quite simple since there is no need for a seperate process in the background to run the program, everything is simpely read from the `.db` file. The site [SQLite Tutorial](https://www.sqlitetutorial.net/) has some simple tutorials for installing and using SQLite.

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

### Energy consumption

The energy consumption table is taken from the database on the Raspberry and contains the data from the grid about energy consumption. The data is in it's original format like on the old project. The `[No]` column is a sort id column and auto increments.

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

### Energy production

The energy production table is taken from the database on the Raspberry and contains the data from the grid about energy production. The data is in it's original format like on the old project. The `[No]` column is a sort id column and auto increments.

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
