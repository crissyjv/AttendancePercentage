
const prompt = require("prompt-sync")();
const input1 = prompt("Total number of classes : ");
const input2 = prompt("Number of classes attended by the student : ");
var attndPercent = Math.floor((input2 * 100) / input1);
var input3 = prompt("Do you have any medical cause : ");

if (attndPercent < 75) {

    if (input3 == "Y") {
        if (attndPercent < 60) {
            return console.log("False")
        }
        else {
            return console.log("True")
        }
    } else {
        return console.log("False")
    }
}

console.log("True")






