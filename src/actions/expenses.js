import uuid from 'uuid'

export const addExpense = ({description = "Default desc", amount = 0, createdDate = ""} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        amount,
        createdDate
    }
})

export const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id
})

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

export const viewExpense = (expenses) => ({
    type: "VIEW_EXPENSE",
    expenses
})