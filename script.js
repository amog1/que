// //  Ramdom decimal 0 too  100 (exclusive)
// let rand1 = Math.random() * 100;
// console.log(rand1);

// // Random integer 0 too 10 (exclusive )
// let rand2 = Math.random() * 10; // 0.00 to 9.99
// rand2 = Math.floor(rand2);
// console.log(rand2);

// // Random int -5 to 5
// let rand3 = Math.random() * 10 + -5;
// rand3 = Math.floor(rand3);
// console.log(rand3);

// Logical operators : &&  (and), || (or), !(not)

// && - Each side must be true
// true && true >> true
// true && false >> false
// false && true >> false
// false && false >> false

// || - Only 1 or both must be true
// true || true >> trie
// true || false >> true
// false || true >> true
// false || false >> false

// let x = 5,
//   y = 10,
//   z = 100;

// let bool1 = x >= 5 || z < 50;
// console.log(bool1);

// let bool2 = x + 5 > y && z == 100;
// console.log(bool1);

// let bool3 = y < 80 || z == 10;
// console.log(bool3); // true

// let bool4 = y < 80 && z == 10;
// console.log(bool4); //false

// Logical Not(!)
// Not reverses the boolean from true to false or false  to true

// let bool4 = !(y < x);
// console.log(bool4); //false

// Dlivery application
// Reject any package with a dimenstion larger than 10 inches

// let length = +prompt("lenght?");
// let width = +prompt("width?");
// let height = +prompt("height?");

// if (length > 10 || width > 10 || height > 10) {
//   console.log("Reject");
// } else {
//   console.log("Accept");
// }

// if (length > 10 && (width > 10) & (height > 10)) {
//   console.log("Reject");
// } else {
//   console.log("Accept");
// }

// if (length <= 10 && (width <= 10) & (height <= 10)) {
//   console.log("Accept");
// } else {
//   console.log("Reject");
// }

// Ex. Grade app

// var finalgrade = +prompt("Enter garde");

// // A grade is valid if is greater than zero and/or less than 100

// if (finalgrade >= 0 <= 100 && finalgrade) {
//   console.log(`grade of ${finalgrade} % submited`);
// } else {
//   console.log(`grade of ${finalgrade} % is not acceptable`);
// }

//
// Random Decimal 0 to 100 (exclusive)
// let rand1 = Math.random() * 100;
// console.log(rand1);

// Random int 0 to 10 (exclusive)
// let rand2 = Math.random() * 10; // 0.00 to 9.99
// rand2 = Math.floor(rand2);
// console.log(rand2);

// Random int -5 to 5 (inclusive)
// let rand3 = Math.random() * 10; // 5 - (-5) = 10
// rand3 = rand3 - 5;
// rand3 = Math.floor(rand3);
// console.log(rand3);

// Logical Operators:  && (and), || (or), ! (not)

// && - Each side must be true
// true && true >> true
// true && false >> false
// false && true >> false
// false && false >> false

// || - Only 1 or both must be true
// true || true >> true
// true || false >> true
// false || true >> true
// false || false >> false

// let x = 5,
//   y = 10,
//   z = 100;

// let bool1 = x >= 5 || z < 50;
// console.log(bool1);

// let bool2 = x + 5 > y && z == 100;
// console.log(bool2);

// let bool3 = (x + z <= 106 || z - y != 90) && 2 * x * y == z;
// console.log(bool3);

// Logical NOT (!)
// NOT reverses the boolean from True to False or False to True

// let bool4 = !(y < x);
// console.log(bool4);

// let bool5 = x + 10 < z / 2 || !(y * x >= z);
// console.log(bool5);

// Delivery Application
// Reject any package with a dimension larger than 10 inches

// let length = +prompt("Length?");
// let width = +prompt("Width?");
// let height = +prompt("Height?");

// if (length > 10 || width > 10 || height > 10) {
//   console.log("Reject");
// } else {
//   console.log("Accept");
// }

// if (length <= 10 && width <= 10 && height <= 10) {
//   console.log("Accept");
// } else {
//   console.log("Reject");
// }

// Ex. Grade App

// var grade = +prompt("Enter Grade:");

// A grade is valid if bigger than 0 and less than 100

// if (grade >= 0 && grade <= 100) {
//   console.log(`Grade of ${grade}% submitted.`);
// } else {
//   console.log(`${grade}% is not an acceptable grade`);
// }

// // 1. Write code that would display:
// //   a. A random decimal from 0 to 1 (exclusive)
// let queA = Math.random() * 1 + 0;

// console.log(queA);

// //   b. A random decimal from 0 to 10 (exclusive)
// let queB = Math.random() * 10 + 0;

// console.log(queB);

// //   c. A random integer from 0 to 1000 (inclusive)
// let queC = Math.round(Math.random() * 1000 + 0);

// console.log(queC);

// //   d. A random decimal from 5 to 15 (exclusive)

// let queD = Math.random() * 10 + 5;

// console.log(queD);

// //   e. A random integer from 1 to 3 (inclusive)

// let queE = Math.round(Math.random() * 2 + 1);

// console.log(queE);

// //   f. A random integer from 100 to 150 (inclusive)

// let queF = Math.round(Math.random() * 50 + 100);
// console.log(queF);

// // 2. Convert each statement to a boolean expression. Come up with variables to represent each value. An example is given below.

// //  a. You can eat if you have food and you are hungry

// let food = +prompt("Do you have food?");
// let hungry = +prompt("Are you hungry?");

// food == "yes" && hungry == "yes";

// // . You can swim if it is Monday or Friday and the pool sign says "open"

// let day = +prompt("What's the day?");
// let sign = +prompt("What does the sign said?");

// day == "Monday" || (day == "Friday" && sign == "open");

// //   c. You get pizza if it is friday or saturday and your Math mark is above 80 or you did your chores.

// let day1 = +prompt("what's the day?");
// let mark = +prompt("what is your math mark?");
// let chores = +prompt("did you do your chores?");

// day1 == "Friday" || (day1 == "Saturday" && mark >= 80) || chores == "yes";

// 3. Identify the logic error(s) in the code below, which should display a single appropriate message for any value of age:

let age = +prompt("What is your age?");
if (age < 18) {
  console.log("child");
} else if (age > 18 && age < 65) {
  console.log("adult");
} else if (age > 65) {
  console.log("senior");
}
