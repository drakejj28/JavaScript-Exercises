// Javascript Exercise 2

// function to calculate pizza slices per person
// 'totalSlices' is the total number of pizza slices available
// 'numberOfPeople' is the number of people sharing the pizza
function sharePizza(totalSlices, numberOfPeople) {

    // calculates the number of slices per person by dividing the total slices by the number of people
    const slicesPerPerson = totalSlices / numberOfPeople;
  
    // returns a string that tells how many slices each person gets
    // the toFixed(2) method formats the number to show two decimal places
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${totalSlices} slice pizza`;
  }
  
  // example of the function
  // calls sharePizza with 8 total slices and 2 people sharing
  console.log(sharePizza(8, 2));  // Each person gets 4.00 slices of pizza; from our 8 slice pizza
  
  // calls sharePizza with 8 total slices and 3 people sharing
  console.log(sharePizza(8, 3));  // Each person gets 2.67 slices of pizza; from our 8 slice pizza
  
  // calls sharePizza with 21 total slices and 20 people sharing
  console.log(sharePizza(21, 20)); // Each person gets 1.05 slices of pizza; from our 21 slice pizza
  
  // calls sharePizza with 10 total slices and 3 people sharing
  console.log(sharePizza(10, 3));  // Each person gets 3.33 slices of pizza; from our 10 slice pizza