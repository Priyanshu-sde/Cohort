const express = require("express");
const mongoose = require("mongoose");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main(){
    await mongoose.connect("mongodb+srv://priyanshusde:PcmmdToom%407068@cluster0.kp9pk.mongodb.net/Course-selling-website");
    app.listen(3000);
    console.log("listening on port 3000");
}

main();
