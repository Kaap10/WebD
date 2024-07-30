class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      console.log("Hello " + name); // Hello Umesh Chaurasiya
      const [firstName, lastName] = name.split(" "); // ["Umesh", "Chaurasiya"]
      this.firstName = firstName; // Umesh
      this.lastName = lastName; // Chaurasiya
    }
  }
  
  const person1 = new Person("Samar", "Sarkar", 25);
  console.log(person1.fullName); // Samar Sarkar
  person1.fullName = "Umesh Chaurasiya";
  console.log(person1.fullName); // Umesh Chaurasiya