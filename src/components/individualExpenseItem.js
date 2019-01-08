import React from 'react'
import { connect } from 'react-redux'
import { removeExpense, removeExpense1 } from '../actions/expenses';
import { Link } from 'react-router-dom';

const IndividualExpenseItem = (props) => (
    <div>
        <h5>{props.expense.description}</h5>
        <p>Amount: {props.expense.amount}</p>
        {props.usedInTextFilterSet ? <p>Date: {props.expense.createdDate}</p> : undefined}
        <button onClick={() => {
            props.dispatch(removeExpense(props.expense.id))
            props.dispatch(removeExpense1(props.expense.id))
        }}>Remove Expense</button>
        <Link to={`/edit/${props.expense.id}`}>Edit</Link>
    </div>
)

export default connect()(IndividualExpenseItem)