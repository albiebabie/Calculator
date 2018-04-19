const ARITHMETIC_MODE = "1";
const VOWEL_COUNTING_MODE = "2";

const arithematic = require("./arithmetic");
const vowelCounting = require("./vowelCounting");
const userInput = require("./userInput");

function printWelcomeMessage() {
    console.log(`
Welcome to the calculator!
==========================`);
}

function getcalculationMode() {
    let message = `
Please chose from the following calculation mode:
1) Arithmetic
2) Vowel Counting
and type your selection.`;
    return userInput.getStringInputWithMessage(message);
}

printWelcomeMessage();
while (true) {
    const calculationMode = getcalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        arithematic.oneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        vowelCounting.oneVowelCalculation();
    } else {
        console.log("You haven't selected a valid calculation mode!");
    }
}
