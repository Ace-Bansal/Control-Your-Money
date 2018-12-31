import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom'
import ExpenseListUnitItem from './expenseListUnitItem';

const ExpenseListItem = (props) => (
    <div>
        <h5>Expenses on <strong>{props.expenses[0].createdDate}</strong></h5>
        {props.expenses.map(expense => <ExpenseListUnitItem key={expense.id} />)}
    </div>
)

export default connect()(ExpenseListItem)