class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and my age is ${this.age}`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Age updated to ${this.age}`);
    }
}

const person1 = new Person('Kap10', 21);
console.log(person1.greet());
person1.updateAge(22);
console.log(person1.greet());