class Person{
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year's old.`;
    }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;

    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Theire major is ${this.mojor}`;
        }
        return description;
    }
}

class Travaler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    };
    getGreetting() {
        let greetting = super.getGreetting();
        if (this.homeLocation) {
            greetting += `I am visiting from ${this.homeLocation}.`;
        }
        return greetting;
    }
    
};
const me = new Travaler('Abdul Wahid', 41, 'Khulna');
console.log(me.getGreetting());

const other = new Travaler(undefined, undefined, 'nowhere');
console.log(other.getGreetting());