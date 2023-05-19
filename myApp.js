let express = require('express');
let app = express();
console.log("Hello World");

app.get("/views/index.html", function(req,res){
    res.send("Hello Express");
});
app.use("/public" , express.static("__dirname + /public"))
































 module.exports = app;
