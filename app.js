const express = require("express");
const bodyParser= require("body-Parser");
const ejs= require("ejs");
const mongoose= require("mongoose");
const session= require("express-session");
const port= 3000;

const app= express();

app.set("view engine", 'ejs');

app.get("/", function(req,res){
    
    res.render("home");
})






app.listen(port, function(){
    console.log("Server started at port 3000");
})