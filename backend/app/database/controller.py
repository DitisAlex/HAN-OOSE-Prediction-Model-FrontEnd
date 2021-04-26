from app.core.db import get_old_db, get_db, close_db


class DatabaseController:
    def __init__(self):
        pass

    # def getGridData(self):
    #     data = []
    #     db = get_old_db()
    #     cur = db.cursor()
    #     cur.execute("SELECT * FROM PV")  # TODO: only get the new data
    #     rows = cur.fetchall()

    #     for row in rows:
    #         data.append(list(row))

    #     close_db(db)

    #     return rows

    def insertGridData(self, data):
        db = get_db()
        cur = db.cursor()

        sql = "INSERT INTO weather (pressure, wind, cloud, temperature, date) VALUES (?, ?, ?, ?, ?)"
        var = (1023,4.73,36, 10.38,'2021-04-20 09:45:14')
        cur.execute(sql, var)

        close_db(db)

        return ""