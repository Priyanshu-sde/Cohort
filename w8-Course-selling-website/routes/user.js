const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signin",function(req,res) {
    res.json({
        message:"Hello"
    })
})
userRouter.post("/signup",function(req,res) {

})
module.exports = {
    userRouter : userRouter
}