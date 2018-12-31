const filtersReducerDefaultState = {
    sortBy: "date"
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        default: 
            return state;
    }
}

export default filtersReducer