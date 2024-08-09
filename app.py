from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder='./frontend/dist')

@app.route('/')
def serve_root():
    print("Servindo o index.html")
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:filename>')
def serve_static_file(filename):
    print("Servindo o ", filename)
    return send_from_directory(app.static_folder, filename)

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    
    user = {
        'name': data.get('name'),
        'email': data.get('email')
    }
    
    # Aqui você pode adicionar lógica para salvar o usuário em um banco de dados, por exemplo.
    
    return jsonify({'message': 'User registered successfully!', 'user': user}), 201

if __name__ == '__main__':
    app.run(debug=True)
