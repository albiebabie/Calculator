const readline = require("readline-sync");

console.log("Please chose from the following operators: \n" +
    "+ - * / \n" +
    "then type your selection.");

const selectedOperator = readline.prompt();
var finalNumber;

console.log("Please enter your first number:");
const firstNumber = parseInt(readline.prompt());

console.log("Please enter your second number:");
const secondNumber = parseInt(readline.prompt());

if (selectedOperator == "+") {
    finalNumber = firstNumber + secondNumber;
} else if (selectedOperator == "-") {
    finalNumber = firstNumber - secondNumber;
} else if (selectedOperator == "*") {
    finalNumber = firstNumber * secondNumber;
} else if (selectedOperator == "/") {
    finalNumber = firstNumber / secondNumber;
} else {
    console.log("you haven't selected an operator!");
}

console.log("Outcome: " + finalNumber);