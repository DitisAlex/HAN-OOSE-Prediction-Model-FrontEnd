import flask
import json
from flask import request, jsonify

app = flask.Flask(__name__)

# Create some test data for our catalog in the form of a list of dictionaries.
books = [
    {'id': 0,
     'title': 'A Game of Thrones',
     'author': 'GRR Martin',
     'first_sentence': 'Eddard.',
     'year_published': '1996'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]


@app.route('/', methods=['GET'])
def home():
    return '''<h1>Distant Reading Archive</h1>
<p>A prototype API for distant reading of science fiction novels.</p>'''


@app.route('/books', methods=['GET'])
def api_all():
    return jsonify(books)


@app.route('/books/<id>', methods=['GET'])
def api_id(id):
    assert id == request.view_args['id']
    if id is None:
        return "Error: No id field provided. Please specify an id."

    results = []

    for book in books:
        if book['id'] == int(id):
            results.append(book)
    return jsonify(results)


@app.route('/books', methods=['POST'])
def make_book():
    requestedBook = request.json

    newBook = {
        'id': len(books),
        'title': requestedBook["title"],
        'author': 'You, the user',
        'first_sentence': 'Testbook',
        'year_published': '2021'
    }

    books.append(newBook);

    return jsonify(newBook);


app.run()
