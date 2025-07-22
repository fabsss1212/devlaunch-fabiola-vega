
const prompt = require('prompt-sync')();

console.log("Welcome to the Central American School of Geology");

let geological_era = parseFloat(prompt("Enter the age of stone being formed (in millions of years): "));

function Age_of_stone() {
    if (geological_era === 65.5) {
        console.log("Great! It belongs to the Cenozoic era");
    } 

    if (geological_era  = 65.5 && geological_era < 251 ) {
        console.log("Great! It belongs to Mesozoic era");
    } 

    if (geological_era <=65.5) {
        console.log("Great! It belongs to the Paleozoic era");
    } 

    if (geological_era > 65.5) {
        console.log("Great! It belongs to the prePaleozoic era");
    } 



}

Age_of_stone();