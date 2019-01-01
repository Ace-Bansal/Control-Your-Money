const filtersReducerDefaultState = {
    sortBy: "date",
    textFilter: ""
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_TEXT_FILTER":
            return {
                ...state,
                textFilter: action.text
            }
        default:
            return state;
    }
}

export default filtersReducer