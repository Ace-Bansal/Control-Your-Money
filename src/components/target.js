import React from 'react';

const Target = (props) => (
    <div>
        <h2>Your monthly target: {props.expenseTarget}</h2>
        <p>This month's expenditure: {props.monthlyExpenditure}</p>
    </div>
)

export default Target;