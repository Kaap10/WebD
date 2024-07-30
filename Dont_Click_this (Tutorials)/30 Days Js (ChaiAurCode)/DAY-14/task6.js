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
    static studentCount = 0;
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
        Student.studentCount++;
    }

    getStudentID() {
        return `My student ID is ${this.studentID}`;
    }
  }

  const student1 = new Student("Kap10", 22, "AIML22019");
  const student2 = new Student("Noob", -2, "AIMLXXXX");
  console.log(student1.greet());
  console.log(student1.getStudentID());
  console.log(`Total number of students: ${Student.studentCount}`);