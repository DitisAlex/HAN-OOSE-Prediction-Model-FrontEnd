from app.core.db import get_old_db, get_db, close_db


class DatabaseController:
    def __init__(self):
        pass

    def getGridData(self):
        data = []
        db = get_old_db()
        cur = db.cursor()
        cur.execute("SELECT * FROM PV")  # TODO: only get the new data
        rows = cur.fetchall()

        for row in rows:
            # data.append([x for x in row])  # or simply data.append(list(row))
            data.append(list(row))

        close_db(db)

        return rows

    def insertGridData(self, data):
        db = get_db()
        cur = db.cursor()

        for row in data:
            sql = "INSERT INTO grid VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            var = (row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9],
                   row[10], row[11], row[12], row[13], row[14], row[15], row[16], row[17], row[18], row[19], row[20])
            cur.execute(sql, var)

        close_db(db)
