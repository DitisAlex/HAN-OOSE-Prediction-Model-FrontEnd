from app.core.db import get_old_db, get_db, close_db


class DatabaseController:
    def __init__(self):
        pass

    def getGridData(self):
        # data = []
        cur = get_old_db().cursor()
        cur.execute("SELECT * FROM PV")
        rows = cur.fetchall()

        # for row in rows:
        #     # data.append([x for x in row])  # or simply data.append(list(row))
        #     data.append(list(row))

        return rows

    def insertGridData(self, rows):
        cur = get_db().cursor()

        for row in rows:
            sql = "INSERT INTO grid VALUES (%s, %s)"
            val = (row)
            cur.execute(sql, val)

        close_db()

        return true
