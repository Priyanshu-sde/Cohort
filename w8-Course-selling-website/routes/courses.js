const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchase", function(req,res) {
    res.json({
        message: "courses endpoint"
    })
})

courseRouter.get("/view", function (req,res) {
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    courseRouter : courseRouter
}