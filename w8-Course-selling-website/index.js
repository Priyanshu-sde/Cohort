const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/courses");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


async function main(){
    await mongoose.connect("mongodb+srv://priyanshusde:7nK3qr6IGkXUf2NT@cluster0.kp9pk.mongodb.net/Cousera");
    app.listen(3000);
    console.log("listening on port 3000")
}

main();
