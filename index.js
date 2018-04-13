const readline = require("readline-sync");

console.log("Please enter your first number:");
const firstNumber = parseInt(readline.prompt());

console.log("Please enter your second number:");
const secondNumber = parseInt(readline.prompt());

const numbersMultiplied = firstNumber * secondNumber;

console.log(numbersMultiplied);