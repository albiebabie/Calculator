const readline = require("readline-sync");

console.log("Welcome to the calculator! \n" +
    "========================== \n" +
    "Please enter one of the following operators: + - * /");
const operator = readline.prompt();

console.log("How many numbers would you like to add together?");
const totalNumbersToBeAdded = readline.prompt();

let numbers = [];
var manipulatedNumber = 0;

for (let i = 0; i < totalNumbersToBeAdded; i++) {
    console.log("Please enter number " + (i + 1) + ":");
    let number = parseInt(readline.prompt());
    numbers.push(number);
}

switch (operator) {
    case "+":
        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];
            manipulatedNumber += number;
        }
        break;

    case "-":
        manipulatedNumber = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            let number = numbers[i];
            manipulatedNumber -= number;
        }
        break;

    case "*":
        manipulatedNumber = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            let number = numbers[i];
            manipulatedNumber *= number;
        }
        break;

    case "/":
        manipulatedNumber = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            let number = numbers[i];
            manipulatedNumber /= number;
        }
        break;

    default:
        break;
}

console.log("Result: " + manipulatedNumber);