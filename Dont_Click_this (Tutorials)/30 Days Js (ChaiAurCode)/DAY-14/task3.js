class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  class Student extends Person{
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getStudentID() {
        return `My student ID is ${this.studentID}`;
    }
  }

  const student1 = new Student("Kap10", 22, "AIML22019");
  console.log(student1.greet());
  console.log(student1.getStudentID());