import React from 'react';
import { connect } from 'react-redux'
import getVisibleAndSortedExpenses from '../selectors';
import IndividualExpenseItem from './individualExpenseItem';

class TextFilterSet extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.expenses.length}</p>
                {this.props.expenses.map(expense => <IndividualExpenseItem usedInTextFilterSet={true} key={expense.id} expense={expense} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: getVisibleAndSortedExpenses(state.expenses, state.filters),
})

export default connect(mapStateToProps)(TextFilterSet);