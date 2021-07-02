import flask
app = flask.Flask(__name__)


from static.main import routes


app.run(debug=True)