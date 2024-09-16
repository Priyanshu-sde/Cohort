const express = require("express");
const app = express();

let requestCount = 0;

function requestIncreaser(req,res,next) {
    requestCount++;
    console.log("Total  number of request = " + requestCount);
    next();
}



app.get("/sum",function(req,res){
    const b= parseInt(req.query.b);
    const a= parseInt(req.query.a);
    res.json({
        ans : a + b
    })
})

app.listen(3000); 