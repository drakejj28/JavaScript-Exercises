// define a Person class with constructor that sets the name and age properities 

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// define an employee class that extends the Person

class Employee extends Person{

// constructor for employee that takes name, age, and position; call the parent class constructor 
constructor (name, age, position){
    super(name, age);
    this.position = position 
}

//overide the displyInfo method to include the position
displayInfo(){
    console.log(`Name: ${this.name}, Age: ${this,age}, Position: ${this.position}`);
}
}

// create a new employee instance 
const employee1 = new Employee("Bob", 25, "Builder");
const employee2 = new Employee("Josh", 27, "Coding Apprentice");

//call the method display info

employee1.displayInfo();
employee2.displayInfo();


