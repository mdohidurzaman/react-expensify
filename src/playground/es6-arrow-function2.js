// argument object, no longer bound with arrow function
const add = (a, b) => {
    return a + b;
}

console.log(add(50, 100));

// this keyword no longer bound
const user = {
    name: 'Abdul',
    cities: ['Dhaka', 'Khulna', 'Rajshahi'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city); 
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());