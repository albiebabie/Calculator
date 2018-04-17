const readline = require("readline-sync");

const ARITHEMATIC_MODE = "1";
const VOWEL_COUNTING_MODE = "2";

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

function oneArithematicCalculation() {
    let operator = getOperator();
    let numbers = getNumbers(operator);
    let result = caclulate(numbers, operator);
    printResult(result);
}

function getStringForVowelCounting() {
    let message = "Please enter a string:"
    return getStringInputWithMessage(message);
}

function oneVowelCalculation() {
    const string = getStringForVowelCounting();
    const vowelCount = calculateVowelCountForString(string);
    printVowelCount(vowelCount);
}

function calculateVowelCountForString(string) {
    const stringUpperCase = string.toUpperCase()
    const lettersArray = stringUpperCase.split("");
    const vowelCount = {
        A: 0,
        E: 0,
        I: 0,
        O: 0,
        U: 0
    }
    const vowels = Object.keys(vowelCount);

    for (let i = 0; i < lettersArray.length; i++) {
        const letter = lettersArray[i];
        if (vowels.includes(letter)) {
            vowelCount[letter] += 1;
        }
    }
    return vowelCount;
}

function printVowelCount(vowelCount) {
    const message = "The vowel count is:"
    console.log(message);
    for (let vowel in vowelCount) {
        console.log(`${vowel}: ${vowelCount[vowel]}`)
    }
}

function getcalculationMode() {
    let message = `
Please chose from the following calculation mode:
1) Arithematic
2) Vowel Counting
and type your selection.`;
    return getStringInputWithMessage(message);
}

printWelcomeMessage();
while (true) {
    const calculationMode = getcalculationMode();
    if (calculationMode === ARITHEMATIC_MODE) {
        oneArithematicCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        oneVowelCalculation();
    }
}