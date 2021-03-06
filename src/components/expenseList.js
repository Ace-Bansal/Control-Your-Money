import React from 'react'
import { connect } from 'react-redux';
import ExpensesOnSingleDate from './expensesOnSingleDate';
import getVisibleAndSortedExpenses from '../selectors/index'
import { setTextFilter } from '../actions/filters';
import TextFilterSet from './textFilterSet';
import Target from './target.js'
import moment from 'moment'
import axios from 'axios'


class ExpenseList extends React.Component {
    state = {
        expensesOnUniqueDates: [],
        numberOfTotalExpenses: 0,
        totalExpensesThisMonth: 0
    }
    onTextFilterChange = (e) => {
        this.props.dispatch(setTextFilter(e.target.value))
    }
    backend = () => {
        axios.get('http://localhost:3000')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    componentDidUpdate() {
        if (this.state.numberOfTotalExpenses != this.props.expenses.length) {
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
                }
            }
            let totalExpensesThisMonth = 0;
            for (let i = 0; i < this.props.expenses.length; i++) {
                totalExpensesThisMonth = totalExpensesThisMonth + this.props.expenses[i].amount
            }
            const numberOfTotalExpenses = this.props.expenses.length;
            this.setState({ expensesOnUniqueDates, numberOfTotalExpenses, totalExpensesThisMonth })
        }
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
            }
        }

        //calculate total expenses this month
        let totalExpensesThisMonth = 0;
        for (let i = 0; i < this.props.expenses.length; i++) {
            var splittedExpenseDate = this.props.expenses[i].createdDate.split("-")
            const expenseYear = splittedExpenseDate[0];
            const expenseMonth = splittedExpenseDate[1];
            const timestamp = moment();
            const currentYear = moment(timestamp).format('YYYY')
            const currentMonth = moment(timestamp).format('MM')

            if (expenseYear == currentYear && expenseMonth == currentMonth) {
                totalExpensesThisMonth = totalExpensesThisMonth + this.props.expenses[i].amount
            }

        }
        const numberOfTotalExpenses = this.props.expenses.length;
        this.setState({ expensesOnUniqueDates, numberOfTotalExpenses, totalExpensesThisMonth })
    }
    render() {
        return (
            <div>
                <button onClick={this.backend}>Click for backend</button>
                <input type="text" name="textFilter" placeholder="Search expenses" value={this.props.filters.textFilter} onChange={this.onTextFilterChange} />
                <button onClick={() => {
                    this.props.dispatch(setTextFilter(""))
                }}>Clear Filter</button>
                {this.props.filters.textFilter == "" ? <Target expenseTarget={this.props.expenseTarget.monthlyTarget} monthlyExpenditure={this.state.totalExpensesThisMonth} /> : undefined}
                <h3>Here are the expenses</h3>
                {this.props.filters.textFilter != "" ? <TextFilterSet /> : this.state.expensesOnUniqueDates.map(date => <ExpensesOnSingleDate key={date[0].id} expenses={date} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: getVisibleAndSortedExpenses(state.expenses, state.filters),
    // expenses: state.expenses,
    filters: state.filters,
    expenseTarget: state.expenseTarget
})

export default connect(mapStateToProps)(ExpenseList)