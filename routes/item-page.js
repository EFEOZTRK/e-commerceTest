const express = require("express");
const Router = express.Router();


Router.get("/landing-page/product-details",(req,res)=>{
    res.render("item-page");
})



module.exports = Router;