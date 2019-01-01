import uuid from 'uuid'

const expensesReducerDefaultState = [
    {
        id: uuid(),
        description: "Ekansh",
        amount: 500,
        createdDate: "2018-12-27"
    },
    {
        id: uuid(),
        description: "Ekansh",
        amount: 500,
        createdDate: "2018-12-27"
    },
    {
        id: uuid(),
        description: "Ekansh",
        amount: 500,
        createdDate: "2018-12-27"
    },
    {
        id: uuid(),
        description: "Ekansh",
        amount: 1000,
        createdDate: "2018-12-29"
    },
    {
        id: uuid(),
        description: "Bansal",
        amount: 1500,
        createdDate: "2018-12-30"
    },
    {
        id: uuid(),
        description: "Bansal",
        amount: 2500,
        createdDate: "2018-12-30"
    }
]

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]

        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id != action.id ? true : false)

        case 'EDIT_EXPENSE':
         return state.map(expense => {
             if(expense.id == action.id) {
                 return {
                     ...expense,
                     ...action.updates
                 }
             } else {
                 return expense
             }
         })

        default:
            return state;
    }
}

export default expensesReducer;