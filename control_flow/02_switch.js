// switch case

// const month = 5;

// switch (month) {
//   case 1:
//     console.log("Jan");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Jun");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("Agust");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("Octomber");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid Month Number");
//     break;
// }

const userEmail = "";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy value
// false, 0, -0, BigInt, "", null, undefined, NaN;

// truthy value
// "0", 'false', " ", [], {},function(){},

// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

// const myObj = {};

// if (Object.keys(myObj).length == 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined
// let val1;
// // val1 = 5 ?? 10;
// // val1 = null ?? 10;
// // val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;
// console.log(val1);

// Ternary Operator
// codition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
