const userInput = require("./userInput");

function getStringForVowelCounting() {
    let message = "Please enter a string:";
    return userInput.getStringInputWithMessage(message);
}

function calculateVowelCountForString(string) {
    const stringUpperCase = string.toUpperCase();
    const lettersArray = stringUpperCase.split("");
    const vowelCount = {
        A: 0,
        E: 0,
        I: 0,
        O: 0,
        U: 0
    };
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
    const message = "The vowel count is:";
    console.log(message);
    for (let vowel in vowelCount) {
        console.log(`${vowel}: ${vowelCount[vowel]}`);
    }
}

exports.oneVowelCalculation = function() {
    const string = getStringForVowelCounting();
    const vowelCount = calculateVowelCountForString(string);
    printVowelCount(vowelCount);
};
