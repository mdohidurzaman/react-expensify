export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce(( sam, value ) => sam + value, 0);
};