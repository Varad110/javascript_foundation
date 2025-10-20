// checking if a number is greater than another number

let num1 = 5;
let num2 = 8;

console.log("I am regular upper case");

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is not greater than num2");
}

// checking if a string is equal to another string

let str1 = "hello";
let str2 = "hello";

if (str1 == str2) {
  console.log("str1 is equal to str2");
} else {
  console.log("str1 is not equal to str2");
}

// checking if a variable is a number or not

let score = 44;

if (typeof score === "number") {
  console.log("Yes, this is a number");
} else {
  console.log("No, this is not a number");
}

// checking if a boolean value is true or false

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

// checking if an array is empty or not

let items = [];
if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
