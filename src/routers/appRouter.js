import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard'
import Header from '../components/header'
import AddExpense from '../components/addExpense'
import PageNotFound from '../components/pageNotFound'
import EditExpense from '../components/editExpense'
import ViewExpensesOnSingleDatePage from '../components/viewExpensesOnSingleDatePage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/add" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/view" component={ViewExpensesOnSingleDatePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;