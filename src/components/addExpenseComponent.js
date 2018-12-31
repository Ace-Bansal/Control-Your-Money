import React from 'react';
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses';

const AddExpenseComponent = (props) => (
    <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            var description = e.target.elements.description.value;
            var amount = e.target.elements.amount.value;
            amount = parseInt(amount, 10)
            var createdDate = e.target.elements.createdDate.value;
            props.dispatch(addExpense({ description, amount, createdDate }))
            props.redirectToHome();
        }}>
            <input type="text" name="description" placeholder="Description" />
            <input type="number" name="amount" placeholder="Amount" />
            <input type="date" name="createdDate" placeholder="Date" />
            <button>Add</button>
        </form>
    </div>
)

export default connect()(AddExpenseComponent)