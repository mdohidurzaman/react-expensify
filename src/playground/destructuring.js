const person = {
    name: 'Zaman',
    age: 40,
    location: {
        city: 'Dhaka',
        temp: 30
    }
};

const { name, age } = person;
console.log(`${name} is ${age}.`);

const { city, temp } = person.location;
if (city && temp) {
    console.log(`It's ${temp} is ${city}.`);
}

const book = {
    title: 'Ego in the enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'penguin'
    }
};

const { name: publisherName = 'Self-publisher' } = book.publisher;
console.log(publisherName);