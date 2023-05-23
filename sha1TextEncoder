from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/hash', methods=['POST'])
def hash_string():
    data = request.get_json()
    if 'input_string' not in data:
        return jsonify({'error': 'Input string not provided.'}), 400

    input_string = data['input_string']
    hashed_string = hashlib.sha1(input_string.encode()).hexdigest()

    response = {
        'hashed_string': hashed_string
    }

    return jsonify(response), 200

if __name__ == '__main__':
    app.run()
