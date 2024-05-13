// Creating a call named Person

class Person {
constructor (name, age){
    // blue print
    this.name = name; // properties 
    this.age = age;
}

// mentho to display information
displayInfo() {
console.log(`Name ${this.name}, Age: ${this.age}`);
}
}

// creating an object of the Person class (aka a new person)
const person1 = new Person ("Josh", 27);
const person2 = new Person ("Alice", 30);

person1.displayInfo(); // this will display Name: Josh, Age: 27
person2.displayInfo(); // this will display Name: Alice, Age: 30

// more practice
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

// method
    calculateAverageGrades(){
const sum = this.grades.reduce((total, grade) => total + grade, 0);
return sum / this.grades.length 
    }
}

const student = new Student ("Josh", 27, [85, 90, 92, 88])
console.log("Average Grade", student.calculateAverageGrades());