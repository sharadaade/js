// global object in browser => Window

// const user = {
//   username: "sharad",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to website`);
//     // this keyword is for current context
//     console.log();
//   },
// };

// user.welcomeMessage();
// user.username = "chirag";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "sharad";
//   console.log(this.username);
// }
// chai();

// const chai = function () {
//   let username = "sharad";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "sharad";
//   console.log(this);
// };
// chai();

// ++++++++++++++++++ Explicit return +++++++++++++++
// need to write "return"

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// ++++++++++++++++++ Implicit return ++++++++++++++++
// No need to write "return"

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ({ username: "sharad" });

// console.log(addTwo(3, 5));

// const myArr = [2, 5, 3, 7, 8];
