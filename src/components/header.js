import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Expensify Practice App</h1>
                <Link to="/" onClick={() => {
                    this.props.dispatch(setTextFilter(""))
                }}>Home</Link>
                <Link to="/add">Add</Link>
            </div>
        )
    }
}

export default connect()(Header)