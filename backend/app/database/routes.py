from flask import request, abort
from app.database import bp
from app.database.controller import DatabaseController

from flask import jsonify


@bp.route('/energy', methods=['GET'])
def login():
    c = DatabaseController()

    try:
        data = c.getGridData()
        c.insertGridData(data)

        return "Correctly inserted data"
    except KeyError:  # KeyError = missing key in json
        abort(401, "Invalid data")
