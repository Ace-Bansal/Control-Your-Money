import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { viewExpense } from '../actions/expenses'

class ExpensesOnSingleDate extends React.Component {
    state = {
        totalSum: 0
    }
    clicked = () => {
        this.props.dispatch(viewExpense(this.props.expenses))
    }
    componentWillMount() {
        let totalSum = 0;
        for (let i = 0; i < this.props.expenses.length; i++) {
            totalSum = totalSum + this.props.expenses[i].amount
        }
        this.setState({ totalSum })
    }
    render() {
        return (
            <div>
                <h4>Expenses on <strong>{this.props.expenses[0].createdDate}</strong></h4>
                <Link to="/view" onClick={this.clicked}>View all expenses on this date</Link>
                <p>TOTAL AMOUNT SPENT TODAY: {this.state.totalSum}</p>
            </div>
        )
    }
}
export default connect()(ExpensesOnSingleDate)
