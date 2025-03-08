const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "itissecret";

const app = express();
app.use(express.json());

const users = [];

app.post("/signup", (req,res) => {
    const {username, password} = req.body;
    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up"
    })
    console.log(users);
})

app.post("/signin", (req,res) =>{
    const {username, password} = req.body;
    let founduser = null;
    for(let i = 0;i < users.length;i++){
        if(users[i].username === username && users[i].password === password){
            founduser = users[i];
        }
    }

    if(founduser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        res.json({
            token: token,
            message: "Signed in" 
        })
    }
    else{
        res.status(403).send({
            message:"Invalid Username or password"
        })
    }
    
});




const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost:{$PORT}')
})
