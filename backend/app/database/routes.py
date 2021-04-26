from flask import request, abort
from app.database import bp
from app.database.controller import DatabaseController

from flask import jsonify


@bp.route('/', methods=['GET'])
def login():
    c = DatabaseController()

    try:
        #            teachers = []
        #    for teacher in Teacher.objects:
        #       teachers.append(teacher)
        #    return jsonify(teachers)
        data = c.getGridData()
        c.insertGridData(data)

        return "Hello world"
    except KeyError:  # KeyError = missing key in json
        abort(401, "Invalid data")
