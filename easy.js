// Javascript Exercise 1

// function 'exerciseGenerator' will create the closure
function exerciseGenerator() {
    // the 'exerciseGenerator' function returns a new function
    // this returned function takes exercise as a parameter
    return function(exercise) {
      // the inner function logs a message to the console with the exercise name
      console.log("Today's exercise: " + exercise);
    };
  }
  
  // stores exerciseGenerator in the variable exercise
  const exercise = exerciseGenerator();
  
  // calls 'exercise' with different exercise names to log the message
  // each of these will log "Today's exercise:" followed by the name of the exercise
  console.log(exercise("Running")); // Output: Today's exercise: Running
  console.log(exercise("Swimming")); // Output: Today's exercise: Swimming
  console.log(exercise("Dancing")); // Output: Today's exercise: Dancing
  console.log(exercise("Fencing")); // Output: Today's exercise: Fencing