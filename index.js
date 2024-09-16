const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

var users = [];

app.post("/signup", function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are singned in"
    })
})

app.post("/signin", function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;
    
    for(let i = 0; i < users.length;i++){
        if(user[i].username === username && users[i].password === password){
            foundUser = usera[i]
        }
    }
    if(!foundUser){
        res.json({
            message: "Invalid Creditential!!"
        })
    }
    else{
        
    }
})