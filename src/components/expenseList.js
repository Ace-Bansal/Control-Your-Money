import React from 'react'
import { connect } from 'react-redux';
import ExpensesOnSingleDate from './expensesOnSingleDate';
import getVisibleAndSortedExpenses from '../selectors/index'

class ExpenseList extends React.Component {
    state = {
        expensesOnUniqueDates: []
    }
    componentWillMount() {
        let uniqueDates = [];
        var expensesOnUniqueDates = [];
        for (let i = 0; i < this.props.expenses.length; i++) {
            var flag = 0;
            for (let j = 0; j < uniqueDates.length; j++) {
                if (this.props.expenses[i].createdDate === uniqueDates[j]) {
                    flag = flag + 1;
                }
            }
            if (flag == 0) {
                const currentDate = this.props.expenses[i].createdDate
                const expensesOnThisDate = this.props.expenses.filter((expense) => {
                    if (expense.createdDate == currentDate) {
                        return true;
                    } else {
                        return false;
                    }
                })

                expensesOnUniqueDates = [
                    ...expensesOnUniqueDates,
                    expensesOnThisDate
                ]

                uniqueDates = uniqueDates.concat(currentDate)
                console.log(expensesOnUniqueDates)

                console.log(uniqueDates)
            }
        }
        this.setState({ expensesOnUniqueDates })
    }
    render() {
        return (
            <div>
                <h3>Here are the expenses</h3>
                {this.state.expensesOnUniqueDates.map(date => <ExpensesOnSingleDate key={date[0].id} expenses={date} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // expenses: getVisibleAndSortedExpenses(state.expenses, state.filters)
    expenses: state.expenses
})

export default connect(mapStateToProps)(ExpenseList)