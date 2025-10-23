// 1. write a `while` loop that calculates the sum of all numbers form 1 to 5 and store the result in a variable named `sum`.
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}

// 2. write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}

// 3. writ3e a `do while` loop that prompts the user to enter their favorite tea type until they enter "stop".

let teaCollection = [];
let tea;

do {
  tea = prompt("Enter your favorite tea type (or type 'stop' to finish):");
  if (tea.toLowerCase() !== "stop") {
    teaCollection.push(tea);
  }
} while (tea.toLowerCase() !== "stop");

// 4. write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

// 5. write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers`.
let numbers = [2, 4, 6];
let multipliedNumbers = [];

for (let l = 0; l < numbers.length; l++) {
  multipliedNumbers.push(numbers[l] * 2);
}

// 6. write a `for` loop that list all the cities in the array `["Paris", "New York", "Tokyo"]` and stores each city in a new array named `cityList`.
let cities = ["Paris", "New York", "Tokyo"];
let cityList = [];
for (let m = 0; m < cities.length; m++) {
  cityList.push(cities[m]);
}
