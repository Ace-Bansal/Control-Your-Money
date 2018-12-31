const getVisibleAndSortedExpenses = (expenses, filters) => {
    if(filters.sortBy == "amount") {
        return expenses.sort((a, b) => {
            if(a.amount >= b.amount) {
                return -1;
            } else {
                return 1
            }
        })
    } else {
        return expenses
    }
}

export default getVisibleAndSortedExpenses;