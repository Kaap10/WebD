const name = "Kap10";
const age = 21;

const person = {
    name,
    age,

    greet() {
        console.log(
            `Hello, my name is ${name} and I am ${age} years old`
        );
    },
};

console.log(person);
person.greet();