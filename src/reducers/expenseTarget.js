const expenseTargetReducerDefaultState = {
    monthlyTarget: 10000
}

const expenseTargetReducer = (state = expenseTargetReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default expenseTargetReducer;