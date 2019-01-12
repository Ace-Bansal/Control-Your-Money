const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

const Expense = require("./models/expense")

const app = express();

app.get("/", function(req, res){
    const obj = {
        name: "Ekansh",
        age: 21
    }
    res.send(obj)
})

mongoose.connect("mongodb://localhost/controlYourMoney")

app.listen(3000, () => {
    console.log("Backend server has started")
})