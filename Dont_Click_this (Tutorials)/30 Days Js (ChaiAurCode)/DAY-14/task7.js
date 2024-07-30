class Person{
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    get fullName() {
        return `Full name : ${this.firstName} ${this.LastName}`;
    }
}

const person1 = new Person('Vardhman', 'Gupta', 21);
console.log(person1.fullName);