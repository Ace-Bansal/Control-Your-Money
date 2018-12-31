import React from 'react'

const IndividualExpenseItem = (props) => (
    <div>
        <h5>{props.expense.description}</h5>
        <p>Amount: {props.expense.amount}</p>
    </div>
)


export default IndividualExpenseItem