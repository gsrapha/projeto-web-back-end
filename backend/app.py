from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
import os

app = Flask(__name__)
CORS(app)

mongo_uri = os.getenv("MONGO_URI", "mongodb://localhost:27017/ongdb")

client = MongoClient(mongo_uri)
db = client["ongdb"]
collection = db["projetos"]


# LISTAR PROJETOS
@app.route('/projetos', methods=['GET'])
def listar_projetos():
    projetos = []

    for projeto in collection.find():
        projetos.append({
            '_id': str(projeto['_id']),
            'nome': projeto['nome'],
            'descricao': projeto['descricao'],
            'status': projeto['status']
        })

    return jsonify(projetos)


# CADASTRAR PROJETO
@app.route('/projetos', methods=['POST'])
def cadastrar_projeto():
    data = request.json

    novo_projeto = {
        'nome': data['nome'],
        'descricao': data['descricao'],
        'status': data['status']
    }

    resultado = collection.insert_one(novo_projeto)

    return jsonify({
        'message': 'Projeto criado com sucesso',
        'id': str(resultado.inserted_id)
    })


# VISUALIZAR DETALHES
@app.route('/projetos/<id>', methods=['GET'])
def detalhes_projeto(id):
    projeto = collection.find_one({'_id': ObjectId(id)})

    if not projeto:
        return jsonify({'error': 'Projeto não encontrado'}), 404

    return jsonify({
        '_id': str(projeto['_id']),
        'nome': projeto['nome'],
        'descricao': projeto['descricao'],
        'status': projeto['status']
    })


# ATUALIZAR PROJETO
@app.route('/projetos/<id>', methods=['PUT'])
def atualizar_projeto(id):
    data = request.json

    collection.update_one(
        {'_id': ObjectId(id)},
        {
            '$set': {
                'nome': data['nome'],
                'descricao': data['descricao'],
                'status': data['status']
            }
        }
    )

    return jsonify({'message': 'Projeto atualizado com sucesso'})


# DELETAR PROJETO
@app.route('/projetos/<id>', methods=['DELETE'])
def deletar_projeto(id):
    collection.delete_one({'_id': ObjectId(id)})

    return jsonify({'message': 'Projeto removido com sucesso'})


@app.route('/')
def home():
    return jsonify({'message': 'Backend Flask funcionando'})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)