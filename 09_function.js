// Function
// function thisIsMyName() {
//   console.log("S");
//   console.log("h");
//   console.log("a");
//   console.log("r");
//   console.log("a");
//   console.log("d");
// }

// thisIsMyName();

function addTwoNumber(number1, number2) {
  //   parameter
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
  //   console.log("sharad"); // after return nothing execute program
}

const result = addTwoNumber(2, 3); // argument

// console.log("Result: ", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Sharad"));
console.log(loginUserMessage());
