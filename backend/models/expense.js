const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    id: String,
    description: String,
    amount: Number,
    createdDate: String
})

module.exports = mongoose.model("Expense", expenseSchema)