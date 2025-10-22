// 1. declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`.
// Access the first element of the array and store it in a variable named `firstTea.`

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];

// 2. declare an array named `cities` containing the `"London"`, `"New York"`, `"Tokyo"`, and `"Paris"`.
// Access the third element of the array and store it in a variable named `favoriteCity.`

let cities = ["London", "New York", "Tokyo", "Paris"];
let favoriteCity = cities[2];

// 3. declare an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, `"masala chai"`.
// Change the second element of the array to `"jasmine tea"`.

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

// 4. declare an array named `citiesVisited` containing `"Mumbai"`, `"Sydney"`.
// Add `"Berlin"` to the array using the `push` method.

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");

// 5. You have an array named `teaOrders` whith `"chai"`, `"matcha"`, and `"earl grey"`.
// Remove the last element from the array using the `pop` method and store it in a variable named `lastOrder.`

let teaOrders = ["chai", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();

// 6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`.
// create a soft copy of this array named `softCopyTeas`.

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;

// 7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
// create a hard copy of this array named `hardCopyCities`.

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];

// 8. You have two arrays named `europeanCities` containing `"Paris"`, `"Rome"`, and `asianCities` containing `"Tokyo"`, `"Bangkok"`.
// merge these two arrays into a new array named `worldCities`.
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

// 9. You have an array named `teaMenu` containing `"black tea"`, `"green tea"`, `"herbal tea"`.
// find the length of the arrray and store it in a variable named `menuLength`.

let teaMenu = ["black tea", "green tea", "herbal tea"];
let menuLength = teaMenu.length;

// 10. You have an array named `cityBucketList` containing `"Kyoto"`, `"Cape Town"`, `"Vancouver"`.
// check if "London" is in the array and store the result in a variable named `isLandonInList`.

let cityBucketList = ["Kyoto", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
