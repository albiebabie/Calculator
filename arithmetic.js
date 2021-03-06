const userInput = require("./userInput");

function getOperator() {
    const message = `
Please chose from the following operators:
+ - * /
and type your selection.`;
    const operator = userInput.getStringInputWithMessage(message);
    if (operatorIsValid(operator)) {
        return operator;
    } else {
        return null;
    }
}

function operatorIsValid(operator) {
    const validOperators = ["+", "-", "*", "/"];
    if (validOperators.includes(operator)) {
        return true;
    } else {
        return false;
    }
}

function getNumbers(operator) {
    let numbers = [];
    let message = `How many numbers would you like to ${operator} ?`;
    let totalNumbers = userInput.getNumberInputWithMessage(message);

    for (let i = 0; i < totalNumbers; i++) {
        let message = "Please enter number " + (i + 1) + ":";
        let number = userInput.getNumberInputWithMessage(message);
        numbers.push(number);
    }

    return numbers;
}

function numberIsGreaterThanZero(number) {
    if (number > 0) {
        return number;
    }
}

function caclulate(numbers, operator) {
    let result;

    if (operator == "+") {
        result = numbers.reduce((total, number) => total + number);
    } else if (operator == "-") {
        result = numbers.reduce((total, number) => total - number);
    } else if (operator == "*") {
        result = numbers.reduce((total, number) => total * number);
    } else if (operator == "/") {
        numbers = numbers.filter(number => numberIsGreaterThanZero(number));
        result = numbers.reduce((total, number) => total / number);
    }

    return result;
}

function printResult(result) {
    console.log(`The answer is: ${result}`);
}

exports.oneArithmeticCalculation = function() {
    let operator;
    do {
        operator = getOperator();
    } while (operator === null);
    let numbers = getNumbers(operator);
    let result = caclulate(numbers, operator);
    printResult(result);
};
