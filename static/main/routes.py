import flask
main_routes = flask.Blueprint('main_routes', __name__)


@main_routes.route('/')
def main():
    return flask.render_template('main.html')