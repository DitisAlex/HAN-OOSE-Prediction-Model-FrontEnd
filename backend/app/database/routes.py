from flask import request, abort
from app.database import bp
from app.database.controller import DatabaseController


@bp.route('/', methods=['GET'])
def login():
    data = request.get_json()
    c = DatabaseController()

    try:
        return "Hello"
    except KeyError:  # KeyError = missing key in json
        abort(401, "Invalid data")
