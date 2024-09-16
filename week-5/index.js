const express = require("express");

const app = express();

function loggerMiddleware(req,res,next){
    console.log("Method is " + req.method);
    console.log("Host is " + req.url);
    console.log("Host is " + req.hostname);
    console.log(new Date());
    next();
}
//all app.get after this will use this as middle ware
app.use(loggerMiddleware);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);