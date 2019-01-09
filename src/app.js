import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/appRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import moment from 'moment';

const store = configureStore()

var timestamp = moment();
var day = moment(timestamp).format('MM, YYYY')


console.log(`moment ${day}`)


 
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))