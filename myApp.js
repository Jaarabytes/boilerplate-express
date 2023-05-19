require('dotenv').config() 

let express = require('express');
let app = express();
console.log("Hello World");

app.get("/views/index.html", function(req,res){
    res.send("Hello Express");
});
app.use("/public" , express.static(__dirname + "/public"))

app.get("/json", function(res,req){
    res.send({"message": "Hello json"})
});
app.use("your-app-url/json", express.static(__dirname+"your-app-url/json"));
var response = "Hello World".toUpperCase();
if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }



























 module.exports = app;
