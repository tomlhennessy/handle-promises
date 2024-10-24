function stretch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve(); // promise is fulfilled after 1 second
    }, 1000);
  })
}

function runOnTreadmill() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve(); // promise is fulfilled after 0.5 seconds
    }, 500);
  })
}

function liftWeights() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve(); // the promise is fulfilled after 2 seconds
    }, 2000);
  })
}

function workout() {
  stretch()
    .then(() => runOnTreadmill())
    .then(() => liftWeights())
    .then(() => {
      console.log("done working out");
    })
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
