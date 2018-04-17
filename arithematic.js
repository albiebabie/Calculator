const userInput = require("./userInput");

function getOperator() {
    let message = `
Please chose from the following operators:
+ - * /
and type your selection.`;
    return userInput.getStringInputWithMessage(message);
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

function caclulate(numbers, operator) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (operator == "+") {
            console.log(typeof number);

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

exports.oneArithematicCalculation = function() {
    let operator = getOperator();
    let numbers = getNumbers(operator);
    let result = caclulate(numbers, operator);
    printResult(result);
};
