import React from 'react'
import IndividualExpenseItem from './individualExpenseItem';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { viewExpense } from '../actions/expenses'

class ExpensesOnSingleDate extends React.Component {
    totalSum = () => {
        let amountSum = 0;
        for (let i = 0; i < this.props.expenses.length; i++) {
            amountSum = amountSum + this.props.expenses[i].amount
        }
        return amountSum;
    }
    clicked = () => {
        console.log("clicked")
        this.props.dispatch(viewExpense(this.props.expenses))
    }
    render() {
        return (
            <div>
                <h4>Expenses on <strong>{this.props.expenses[0].createdDate}</strong></h4>
                {/* {this.props.expenses.map(expense => <IndividualExpenseItem key={expense.id} expense={expense} />)} */}
                <Link to="/view" onClick={this.clicked}>View all expenses on this date</Link>
                <p>TOTAL AMOUNT SPENT TODAY: {this.totalSum()}</p>
            </div>
        )
    }
}
export default connect()(ExpensesOnSingleDate)
