const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const cors = require("cors")

const Expense = require("./models/expense")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.get("/", function(req, res){
    const obj = {
        name: "Ekansh",
        age: 21
    }
    console.log("request receied")
    res.json(obj)
})

mongoose.connect("mongodb://localhost/controlYourMoney")

app.listen(3000, () => {
    console.log("Backend server has started")
})