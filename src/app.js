import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/appRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { sortByAmount } from './actions/filters'

const store = configureStore()

console.log(store.getState())

// store.dispatch(sortByAmount())

// console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))