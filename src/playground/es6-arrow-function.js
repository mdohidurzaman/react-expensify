/*const square = function (x) {
    return x * x;
};

function squareA(x) {
    return x * x;
};

console.log(squareA(3));

const squareArrow = (x) => {
return x * x;
};

const squareArrow = (x) => x * x;
console.log(squareArrow(8));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
*/
const getFirstName = fullName => fullName.split(' ')[1];
console.log(getFirstName("Abdul Wahid"));