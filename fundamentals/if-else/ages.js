

const prompt = require('prompt-sync')() 

const age = parseInt(prompt('input a number -> '))

console.log(age) /*T OPERATOS  The ternary operator, also known as the conditional operator, is a shorthand way to write a conditional statement (similar to an if-else statement) in a single line, taking three operands: a condition, a value if the condition is true, and a value if the condition is false*/
const message = (age <= 2)
 ? 'You are a baby'
 : (age>=3 && age<=13)
? 'you are a child'
  : (age >=14 && age <=17)
   ? 'you are a teenager'
   : (age >=18 && age <=19)
    ? 'you are a young adult'
    : (age <= 60) 
     ? 'you are an adult'
     : null


console.log (message ? message: 'The institution does not support your age')

