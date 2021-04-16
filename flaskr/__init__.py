import os

from flask import Flask

# Import routes
from .auth import bp as auth_bp


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'modbusData.db'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Initialize db
    from flaskr import db
    db.init_app(app)

    # Register routes
    app.register_blueprint(auth_bp, url_prefix='/auth')

    @app.route('/test')
    def test():
        return 'test works!'

    return app
