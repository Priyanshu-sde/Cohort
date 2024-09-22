const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const user = new Schema ({
    name : String,
    email: {type: String, unique: true},
    password: String
});

const todo = new Schema({
    userId : ObjectId,
    title : String,
    done : Boolean
});

const userModel = mongoose.model('users', user);
const TodoModel = mongoose.model('todos', todo);

module.exports = {
    userModel,
    TodoModel
}