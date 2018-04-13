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

switch (selectedOperator) {
    case "+":
        console.log(selectedOperator);
        finalNumber = firstNumber + secondNumber;
        break;

    case "-":
        console.log(selectedOperator);
        finalNumber = firstNumber - secondNumber;
        break;

    case "*":
        console.log(selectedOperator);
        finalNumber = firstNumber * secondNumber;
        break;

    case "/":
        console.log(selectedOperator);
        finalNumber = firstNumber / secondNumber;
        break;

    default:
        console.log("you haven't selected an operator!");
        break;
}

console.log(finalNumber);