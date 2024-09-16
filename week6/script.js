const express = require('express');

const app = express();
app.arguments(express.json);

const user = [];

app.post("/signup",function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username : username,
        password : password
    })

    res.json({
        message: "You are signed up"
    })
})

app.post("/signin",function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0;i < user.length;i++) {
        if(user[i].username == username && user[i].password == password){
            foundUser = user[i];
        }
    }

    if(foundUser) {
        const token = generateToken();
        foundUser.token = token;
        res.json({
            message: "You Logged in!!"
        })
    }

})

app.listen(3000);