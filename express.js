// My imports.
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

// My app requirements.
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}));



// My Routes
const landingPage = require("./routes/landing-page");
const productDetails = require("./routes/item-page");
const env = require("env");




// Using Routes
app.use(landingPage);
app.use(productDetails);


const port = 3000;
app.listen(port,()=>{
    console.log(`Server url : http://localhost:3000/landing-page`);
    
})
