const getVisibleAndSortedExpenses = (expenses, filters) => {
    const visibleExpenses = expenses.filter(expense => {
        if(expense.description.toLowerCase().search(filters.textFilter.toLowerCase()) > -1) {
            return true
        } else {
            return false
        }
    })
    const sortedAndVisibleExpenses = visibleExpenses.sort(function (a, b) {
        if (filters.sortBy == "date") {
            var dateA = a.createdDate;
            dateA = dateA.split("-");
            var dateB = b.createdDate;
            dateB = dateB.split("-");
            var newDateA = dateA[1] + "/" + dateA[2] + "/" + dateA[0]; //month/date/year
            var newDateB = dateB[1] + "/" + dateB[2] + "/" + dateB[0]; //month/date/year
            var timestampA = new Date(newDateA).getTime()
            var timestampB = new Date(newDateB).getTime()

            const returnValue = timestampA >= timestampB ? -1 : 1

            // const returnValue = a.createdDate >= b.createdDate ? -1 : 1
            return returnValue;
        } else if (filters.sortBy == "amount") {
            const returnValue = a.amount >= b.amount ? -1 : 1
            return returnValue;
        }
    })

    return sortedAndVisibleExpenses;

}

export default getVisibleAndSortedExpenses;