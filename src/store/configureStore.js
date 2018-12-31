import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import expensesArrayOnThisDateReducer from '../reducers/expensesArrayOnThisDate'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            expensesArrayOnThisDate: expensesArrayOnThisDateReducer
        })
    )
    return store;
}

export default configureStore;