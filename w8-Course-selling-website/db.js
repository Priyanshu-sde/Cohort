const mongoose = require("mongoose");
console.log("Connected to Database")
mongoose.connect("mongodb+srv://priyanshusde:7nK3qr6IGkXUf2NT@cluster0.kp9pk.mongodb.net/Cousera");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseID:ObjectId
});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}