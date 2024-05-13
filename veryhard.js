// Javascript Exercise 4

// defines the Person class with a constructor to initialize the object
class Person {
    // the constructor sets up our object with the properties we want
    constructor(name, job, age) {
      this.name = name; 
      this.job = job;   
      this.age = age;   
    }
  
    // a method for the person to exercise
    exercise() {
      // this will print a message to the console
      console.log("Running is fun! - said no one ever");
    }
  
    // a method to fetch the job of the person
    fetchJob() {
      // this will print the person's name and job to the console
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  
 // defines a Programmer class that extends the Person class
class Programmer extends Person {
    // the constructor for Programmer includes an additional languages property.
    constructor(name, job, age, languages) {
      super(name, job, age); 
      this.languages = languages; 
      this.busy = true;          
    }
  
    // a method to mark the programmer as not busy
    completeTask() {
      this.busy = false; // set the busy property to false
    }
  
    // a method to mark the programmer as busy
    acceptNewTask() {
      this.busy = true; 
    }
  
    // a method that logs a message depending on if the programmer is busy
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    // a method to add a new language to the programmer's list
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage); // Add the new language to the 'languages' array.
    }
  
    // a method to list all the languages the programmer knows
    listLanguages() {
      return this.languages; 
    }
  }
  
  // create instances (aka objects) of Person and Programmer.
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
  
  // this uses the learnLanguage method to add a new language to each programmer
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  
  // this uses the listLanguages method to print out the languages each programmer knows
  console.log(c1.listLanguages());
  console.log(c2.listLanguages());
  console.log(c3.listLanguages());
  
  // prints out the details of the person1 object and the programmer objects
  console.log(person1);
  console.log(c1);
  console.log(c2);
  console.log(c3);
  
  // calls the exercise and fetchJob methods on person1
  person1.exercise();
  person1.fetchJob();