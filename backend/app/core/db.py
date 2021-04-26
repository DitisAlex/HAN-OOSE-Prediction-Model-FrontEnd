import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext
from pandas import pandas as pd


def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)


def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db


def get_old_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['OLD_DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.commit()
        db.close()

# DB Test command
# After flask is running use: flask test-db


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
