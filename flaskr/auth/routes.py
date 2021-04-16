from flaskr.auth import bp
from flask import request, abort


@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    try:
        return data["username"] + " logged in!"
    except KeyError:  # KeyError = missing key in json
        abort(401, "Invalid data")
