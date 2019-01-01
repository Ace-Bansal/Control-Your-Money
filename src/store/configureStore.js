import { createStore, combineReducers } from 'redux'
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import expensesArrayOnThisDateReducer from '../reducers/expensesArrayOnThisDate'
import expenseTargetReducer from '../reducers/expenseTarget'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            expensesArrayOnThisDate: expensesArrayOnThisDateReducer,
            expenseTarget: expenseTargetReducer
        })
    )
    return store;
}

export default configureStore;