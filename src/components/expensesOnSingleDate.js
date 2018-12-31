import React from 'react'
import { connect } from 'react-redux'
import IndividualExpenseItem from './individualExpenseItem';

class ExpensesOnSingleDate extends React.Component {
    totalSum = () => {
        let amountSum = 0;
        for (let i = 0; i < this.props.expenses.length; i++) {
            amountSum = amountSum + this.props.expenses[i].amount
        }
        return amountSum;
    }
    render() {
        return (
            <div>
                <h4>Expenses on <strong>{this.props.expenses[0].createdDate}</strong></h4>
                {this.props.expenses.map(expense => <IndividualExpenseItem key={expense.id} expense={expense} />)}
                <p>TOTAL AMOUNT SPENT TODAY: {this.totalSum()}</p>
            </div>
        )
    }
}
export default connect()(ExpensesOnSingleDate)
