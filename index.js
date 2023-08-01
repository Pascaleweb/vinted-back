const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

app.get("/" , (req, res) =>{
    // console.log("youpi/");
    res.status(200).json("https://lereacteur-vinted-api.herokuapp.com/offers");
});


app.listen(3000, ()=>{
    console.log("serveur started");
});