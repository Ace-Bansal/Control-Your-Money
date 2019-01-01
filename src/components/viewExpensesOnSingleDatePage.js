import React from 'react'
import { connect } from 'react-redux'
import IndividualExpenseItem from './individualExpenseItem';

const ViewExpensesOnSingleDatePage = (props) => (
    <div>
        {props.expensesArrayOnThisDate.map(expense => <IndividualExpenseItem usedInTextFilterSet={false} key={expense.id} expense={expense} />)}
    </div>
)

const mapStateToProps = (state) => ({
    expensesArrayOnThisDate: state.expensesArrayOnThisDate
})

export default connect(mapStateToProps)(ViewExpensesOnSingleDatePage)