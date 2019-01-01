const expensesArrayOnThisDateReducerDefaultState = [];

const expensesArrayOnThisDateReducer = (state = expensesArrayOnThisDateReducerDefaultState, action) => {
    switch (action.type) {
        case 'VIEW_EXPENSE':
            return action.expenses

        case 'REMOVE_EXPENSE1':
            return state.filter(expense => expense.id != action.id ? true : false)

        default:
            return state
    }
}

export default expensesArrayOnThisDateReducer;