const express = require("express");
const jwt = require("jsonwebtoken");
const { auth, JWT_SECRET } = require("./auth");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://priyanshusde:PcmmdToom%407068@cluster0.kp9pk.mongodb.net/")
const {UserModel, TodoModel } = require("./db");


const app = express();
app.use(express.json());




app.post("/signup",async function(req,res){
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
     res.json({
        message: "You are Signed up"
     })

});


app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    });

    if(response){
        const token = jwt.sign({
            id: response._id.toString()
        })

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