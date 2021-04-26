import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext
from pandas import pandas as pd
from datetime import datetime, timedelta, timezone
from pyowm.owm import OWM
from pyowm.utils import timestamps
import numpy as np

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE']
        )

    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()

# DB Test command
# After flask is running use: flask test-db
@click.command('get-data')
@with_appcontext
def get_dataz():
    """Get dataz"""

    owm = OWM('1a4df9d4817c3d16e92b272d59531753')
    mgr = owm.weather_manager()
    one_call = mgr.one_call(lat=51, lon=5)
    #one_call.forecast_daily[0].temperature('celsius').get('feels_like_morn', None) #Ex.: 7.7
    forecast_hourly = one_call.forecast_hourly
    forecast_hourly[0].temperature('celsius')['temp']

    nr_of_weathers = len(forecast_hourly)
    Cloud = np.zeros(len(forecast_hourly))
    Temperature = np.zeros(len(forecast_hourly))
    Wind = np.zeros(len(forecast_hourly))

    for i in range(nr_of_weathers):
        dt = (datetime.fromtimestamp(forecast_hourly[i].ref_time)).strftime('%Y-%m-%d %H:%M:%S')
        Cloud[i] = forecast_hourly[i].clouds
        Temperature[i] = forecast_hourly[i].temperature('celsius')['temp']
        Wind[i] = forecast_hourly[i].wind()['speed']
    #print(dt, forecast_hourly[i].temperature('celsius'),forecast_hourly[i].clouds )

    print('Temperature',Temperature)
    print('Cloud', Cloud)
    print('Wind', Wind)

@click.command('insert-test')
@with_appcontext
def insert_test():
    """Insert tables."""
    db = get_db()
    cur = db.cursor()

    # query = "INSERT INTO weather (pressure, wind, cloud, temperature, date) VALUES (1023,4.73,36, 10.38,'2021-04-20 09:45:14');"
    query = "INSERT INTO weather (pressure, wind, cloud, temperature, date) VALUES (?, ?, ?, ?, ?);"
    var = (1023,4.73,36, 10.38,'2021-04-20 09:45:14')
    cur.execute(query, var)

@click.command('test-db')
@with_appcontext
def get_tables():
    """Get tables."""
    db = get_db()
    query = "SELECT * FROM weather;"
    df = pd.read_sql_query(query, db)

    print(df)

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(get_tables)
    app.cli.add_command(insert_test)
    app.cli.add_command(get_dataz)
