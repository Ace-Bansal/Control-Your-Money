const expensesArrayOnThisDateReducerDefaultState = [];

const expensesArrayOnThisDateReducer = (state = expensesArrayOnThisDateReducerDefaultState, action) => {
    switch (action.type) {
        case 'VIEW_EXPENSE':
            return action.expenses
        default:
            return state
    }
}

export default expensesArrayOnThisDateReducer;