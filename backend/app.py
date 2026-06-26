from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import os

app = Flask(__name__)
CORS(app)

mongo_uri = os.getenv("MONGO_URI")
client = MongoClient(mongo_uri)

db = client["ongdb"]
projects = db["projects"]

def serialize(project):
    return {
        "_id": str(project["_id"]),
        "name": project["name"],
        "description": project["description"],
        "category": project["category"]
    }

@app.route("/projects", methods=["GET"])
def get_projects():
    return jsonify([serialize(p) for p in projects.find()])

@app.route("/projects", methods=["POST"])
def add_project():
    data = request.json

    result = projects.insert_one({
        "name": data["name"],
        "description": data["description"],
        "category": data["category"]
    })

    return jsonify({"id": str(result.inserted_id)}), 201

@app.route("/projects/<id>", methods=["GET"])
def get_project(id):
    project = projects.find_one({"_id": ObjectId(id)})
    return jsonify(serialize(project))

@app.route("/projects/<id>", methods=["PUT"])
def update_project(id):
    data = request.json

    projects.update_one(
        {"_id": ObjectId(id)},
        {"$set": {
            "name": data["name"],
            "description": data["description"],
            "category": data["category"]
        }}
    )

    return jsonify({"message": "Projeto atualizado"})

@app.route("/projects/<id>", methods=["DELETE"])
def delete_project(id):
    projects.delete_one({"_id": ObjectId(id)})
    return jsonify({"message": "Projeto removido"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)