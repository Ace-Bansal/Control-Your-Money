import uuid from 'uuid'
import axios from 'axios'

export const addExpense = ({ description = "Default desc", amount = 0, createdDate = "" } = {}) => {
    const expense = {
        id: uuid(),
        description,
        amount,
        createdDate
    }
    axios.post("http://localhost:3000/add", expense)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            amount,
            createdDate
        }
    }
}

export const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id
})

export const removeExpense1 = (id) => ({
    type: "REMOVE_EXPENSE1",
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