from flask import request, abort
from app.weather import bp
from app.weather.controller import WeatherController

from flask import jsonify


@bp.route('', methods=['POST'])
def setWeather():
    c = WeatherController()

    try:
        c.setWeatherData()

        return "Weather data inserted"
    except KeyError:  # KeyError = missing key in json
        abort(401, "Invalid data")

@bp.route('', methods=['GET'])
def getWeather():
    c = WeatherController()

    try:
        result = c.getWeatherData()

        return result
    except KeyError:  # KeyError = missing key in json
        abort(401, "Invalid data")
