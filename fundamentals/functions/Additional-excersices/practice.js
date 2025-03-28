



/*  Function Syntax and Working
A function definition is sometimes also termed a function declaration or function statement. Below are the rules for creating a function in JavaScript:

Begin with the keyword function followed by,
A user-defined function name (In the above example, the name is sum)
A list of parameters enclosed within parentheses and separated by commas (In the above example, parameters are x and y)
A list of statements composing the body of the function enclosed within curly braces {} (In the above example, the statement is “return x + y”).
 example below:

 The syntax for creating a function in JavaScript is quite simple. Functions can take input in the form of parameters and can return a value or output.
/*/ 

function greet()   /* here you can define the function */ 
{ console.log ("hellooo!!")} /* there you can type your function instructions, prints, conditionals, const.. */

greet() /*at the end you need to call the function, otherwise it will not display. */

const prompt = require('prompt-sync')() 
const num  = parseInt(prompt('digite un numero: '))
 

function numeritos (num){

  if (num ===12 ){
    console.log ('cool, that is my fav number')
  if (num >12){
    console.log('nah dawg')

  }
  }
}

numeritos(num)