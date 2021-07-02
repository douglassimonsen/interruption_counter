import flask
from static.main.routes import main_routes
app = flask.Flask(__name__)
app.register_blueprint(main_routes)

from static.main import routes


if __name__ == '__main__':
    app.run(debug=True)