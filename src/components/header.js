import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify Practice App</h1>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
    </header>
)

export default Header