class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreet() {
        return `Hello, I am a person`;
    }
}

console.log(Person.genericGreet()); 