const readline = require("readline-sync");

function printWelcomeMessage() {
    console.log(`
Welcome to the calculator!
==========================`);
}

function getStringInputWithMessage(message) {
    console.log(message);
    return readline.prompt();
}

function getNumberInputWithMessage(message) {
    let inputNumber;
    do {
        console.log(message);
        inputNumber = readline.prompt();
    } while (isNaN(inputNumber));

    return inputNumber;
}

function getOperator() {
    let message = `
Please chose from the following operators:
+ - * /
and type your selection.`;
    return getStringInputWithMessage(message);
}

function getNumbers(operator) {
    let numbers = [];
    let message = `How many numbers would you like to ${operator} ?`;
    let totalNumbers = getNumberInputWithMessage(message);

    for (let i = 0; i < totalNumbers; i++) {
        let message = "Please enter number " + (i + 1) + ":";
        let number = getNumberInputWithMessage(message);
        numbers.push(number);
    }

    return numbers;
}

function caclulate(numbers, operator) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (operator == "+") {
            result += number;
        } else if (operator == "-") {
            result -= number;
        } else if (operator == "*") {
            result *= number;
        } else if (operator == "/") {
            result /= number;
        }
    }
    return result;
}

function printResult(result) {
    console.log(`The answer is: ${result}`);
}

function oneCalculation() {
    let operator = getOperator();
    let numbers = getNumbers(operator);
    let result = caclulate(numbers, operator);
    printResult(result);
}

printWelcomeMessage();
while (true) {
    oneCalculation();
}