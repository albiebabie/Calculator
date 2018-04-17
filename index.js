const ARITHEMATIC_MODE = "1";
const VOWEL_COUNTING_MODE = "2";

const arithematic = require("./arithematic");
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
1) Arithematic
2) Vowel Counting
and type your selection.`;
    return userInput.getStringInputWithMessage(message);
}

printWelcomeMessage();
while (true) {
    const calculationMode = getcalculationMode();
    if (calculationMode === ARITHEMATIC_MODE) {
        arithematic.oneArithematicCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        vowelCounting.oneVowelCalculation();
    }
}
