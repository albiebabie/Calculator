const readline = require("readline-sync");

exports.getStringInputWithMessage = function(message) {
    console.log(message);
    return readline.prompt();
};

exports.getNumberInputWithMessage = function(message) {
    let inputNumber;
    do {
        console.log(message);
        inputNumber = parseInt(readline.prompt());
    } while (isNaN(inputNumber));

    return inputNumber;
};
