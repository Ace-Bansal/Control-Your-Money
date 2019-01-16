const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const cors = require("cors")

const Expense = require("./models/expense")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb://localhost/controlYourMoney")


app.get("/", function(req, res){
    console.log("request receied")
    res.render("index.ejs")
})

app.post("/add", function(req, res){
    console.log("received expense");
    console.log(req.body)
    Expense.create(req.body, function(err, addedExpense) {
        if(err){
            console.log(err)
        } else {
            console.log("expense created")
            console.log(addedExpense)
        }
    })
})


app.listen(3000, () => {
    console.log("Backend server has started")
})