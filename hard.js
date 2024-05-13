// Javascript Exercise 3

//  the 'createPII' function is a closure that encapsulates the name and SSN properties.
function createPII() {
    // two private properties that are not accessible outside of this function
    const name = 'John';
    const SSN = '123-45-6789';
  
    //  the name property is made accessible through the getName public method
    function getName() {
      return name; // returns the name property
    }
  
    /// createPII returns an object with the getName method allowing access to the name property.
    // this object does not expose the SSN property keeping it private
    return {
      getName: getName
    };
  }
  
  // creates an instance of the PII object
  const patient2 = createPII();
  
  console.log(patient2.name); // undefined because 'name' is private
  console.log(patient2.SSN); // undefined because 'SSN' is private
  console.log(patient2.getName()); // John, accessed through the public method

  // the following line is commented out because it would throw an error
  // console.log(patient2.getSSN()); // there is no public method to access SSN
  // the SSN property is kept private and is not exposed to the outside scope
  
 
  
