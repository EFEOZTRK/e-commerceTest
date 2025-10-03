const express = require("express");
const Router = express.Router();


Router.get("/landing-page",(req,res)=>{
    res.render("landing-page");
})





module.exports = Router;