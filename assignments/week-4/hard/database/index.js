const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://priyanshusde:PcmmdToom%407068@cluster0.kp9pk.mongodb.net/todo-app');
const {Schema} = mongoose;
// Define schemas

const UserSchema = new Schema({
    // Schema definition here
    email:{type:String, unique:true},
    password: String,
    name: String

});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}