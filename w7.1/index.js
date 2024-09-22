const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://priyanshusde:PcmmdToom%407068@cluster0.kp9pk.mongodb.net/todo-me");

const {userModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");

const app = express();
app.use(express.json());


app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await userModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});


app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({
        email: email,
        password: password
    });

    if(response){
        const token = jwt.sign({
            id: response._id.toString()
        },JWT_SECRET)

        res.json({
            token
        })

    }
    else{
        res.status(404).json({
            message:"Incorrect Credential"

        })
    }
});


app.post("/todo",function(req,res){

})
app.get("/todos",function(req,res){

})

app.listen(3000);