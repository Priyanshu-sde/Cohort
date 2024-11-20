const { Router } = require("express");
const userRouter = Router();
const userMiddleware = require("../middleware/user");
const { userModel } = require("../database/index")


// User Routes
userRouter.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { email, password, name } = req.body;

    await user.create({
        email: email,
        password:password,
        name:name
    })

    res.json({
        message:"Signup succeeded"
    })
});

userRouter.post('/login', (req, res) => {
     // Implement user login logic
});

userRouter.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

userRouter.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = userRouter