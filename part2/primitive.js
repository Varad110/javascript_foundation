// Number
let balance = 120;
let anotherBalance = new Number(120);
// console.log(balance);
// console.log(anotherBalance);

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

let firstname;
// console.log(firstname); // output undefined

let lastname = undefined;
// console.log(lastname); // output undefined

//string

let myString = "hello";
let myStringOne = "Hola";
let username = "varad";
let oldGreet = myString + " " + "varad";
let greetMessage = `Hello ${username}!`;

let demoOne = `value is ${2 * 2}`;
// console.log(demoOne);

// Symbol

let sm1 = Symbol("varad");
let sm2 = Symbol("varad");
console.log(sm1 == sm2);
// note symbol will make each variable unique each time even if the value is same.
