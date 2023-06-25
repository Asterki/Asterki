from bson import json_util
import json
import uuid
from datetime import datetime
from pydantic import BaseModel, ValidationError

from flask import Flask, request
from pymongo import MongoClient


# * Utils
def parse_json(data):
    return json.loads(json_util.dumps(data))


# * Define clients
client = MongoClient("localhost", 27017)
app = Flask(__name__)

# * Databases
blog_db = client.asterki_website["blog-posts"]


# * Routes
# Get all the blog posts
@app.route("/posts", methods=["GET"])
def get_posts():
    try:
        posts = blog_db.find()
        return parse_json([post for post in posts]), 200
    except:  # noqa: E722
        return "server-error", 500


# Get an specific post
@app.route("/posts/<string:post_id>", methods=["GET"])
def get_post(post_id):
    try:
        post = blog_db.find_one({"post_id": post_id})
        if post:
            return parse_json(post)
        else:
            return "not-found", 404
    except:  # noqa: E722
        return "server-error", 500


# Post a new blog post
@app.route("/posts", methods=["POST"])
def post_blog():
    try:
        # Validate the request body
        class RequestBodySchema(BaseModel):
            title: str
            content: str

        RequestBodySchema(**request.json)

        # Generate the document
        post_id = str(uuid.uuid4())
        new_post = {
            "title": request.json["title"],
            "content": request.json["content"],
            "post_id": post_id,
            "date": str(datetime.now()),
        }

        blog_db.insert_one(new_post)  # Save the document
        return parse_json(new_post), 201

    except ValidationError:
        return "invalid-parameters", 400

    except:  # noqa: E722
        return "server-error", 500


# Update existing post
@app.route("/posts/<string:post_id>", methods=["PUT"])
def update_post(post_id):
    try:
        # Validate the request body
        class RequestBodySchema(BaseModel):
            title: str
            content: str

        RequestBodySchema(**request.json)

        post = blog_db.find_one({"post_id": post_id})
        if post:
            post["title"] = request.json["title"]
            post["content"] = request.json["author"]

            blog_db.update_one({"post_id": post_id}, {"$set": post})

            return parse_json(post)
        else:
            return "not-found", 404
    except:  # noqa: E722
        return "server-error", 500


# Delete existing post
@app.route("/posts/<string:post_id>", methods=["DELETE"])
def delete_post(post_id):
    try:
        result = blog_db.delete_one({"post_id": post_id})
        if result.deleted_count > 0:
            return "deleted", 200
        else:
            return "not-found", 404

    except:  # noqa: E722
        return "server-error", 500


if __name__ == "__main__":
    app.run(debug=True)
