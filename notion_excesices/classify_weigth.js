const prompt = require('prompt-sync')();

let input = prompt("Input your weight IN KILOS please: ");
let kilos = parseFloat(input); // convert string input to number

let pounds = kilos * 2.2;

function convert_kilos2_pounds() {
    if (pounds > 150) {
        console.log("obese");
    } else if (pounds >= 100 && pounds <= 150) {
        console.log("normal");
    } else {
        console.log("underweight");
    }
}

console.log( "you weigth in pounds is : ", pounds )

convert_kilos2_pounds();
