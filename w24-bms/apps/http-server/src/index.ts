import * as express from "express";
import {client} from "@repo/db/client"

const app = express.default();
app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hi there");
})

app.post("/signup", (req,res) => {
    const {username,password} = req.body;
    client.user.create({
        data: {
            username: username,
            password: password
        }
    })

    res.send("Hi There");
})

app.listen(3000);