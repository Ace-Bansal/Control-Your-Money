import React from 'react'
import { connect } from 'react-redux'
import { editExpense } from '../actions/expenses'

class EditExpense extends React.Component {
    state = {
        description: undefined,
        amount: undefined
    }
    onDescriptionChange = (e) => {
        var newDesc = e.target.value;
        this.setState(() => {
            return {
                description: newDesc
            }
        })
    }
    onAmountChange = (e) => {
        var newAmt = e.target.value;
        this.setState(() => {
            return {
                amount: newAmt
            }
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        const updates = {
            description: this.state.description,
            amount: this.state.amount
        }
        this.props.dispatch(editExpense(this.props.match.params.id, updates))
        this.props.history.push("/")
    }
    componentWillMount() {
        for (var i = 0; i < this.props.expenses.length; i++) {
            if (this.props.match.params.id == this.props.expenses[i].id) {
                this.setState(() => {
                    return {
                        description: this.props.expenses[i].description,
                        amount: this.props.expenses[i].amount
                    }
                })
                break;
            }
        }
    }
    render() {
        return (
            <div>
                <h3>Edit Expense</h3>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="description" value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type="number" name="amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <button>Edit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: state.expenses
})

export default connect(mapStateToProps)(EditExpense)