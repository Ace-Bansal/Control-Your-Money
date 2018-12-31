import React from 'react'
import AddExpenseComponent from './addExpenseComponent'

const AddExpense = (props) => (
    <div>
        <h4>Add Expense page</h4>
        <AddExpenseComponent redirectToHome={() => {
            props.history.push("/")
        }} />
    </div>
)

export default AddExpense