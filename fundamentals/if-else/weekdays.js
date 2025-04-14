

const prompt = require('prompt-sync')() 

const numDay = parseInt(prompt('input a number -> '))
const nameDay = numDay
switch(numDay) {
    case 1: 
    console.log(`Monday, ughhh`);
        break;
    case 2:
    console.log(`Taco Tuesday, meh`);
        break;
    case 3:
        console.log(`Wednesday I guess...`);
        break;
    case 4:
    console.log(`Thursday`);
        break;
    case 5:
    console.log(`Friday, TGIF!`);
        break;
    case 6:
    console.log(`Saturdayyyy`);
        break;
    case 7:
    console.log(`Sunny Sunday`);
        break; 
    
        default:
        console.error('invalid day')

    }
    


