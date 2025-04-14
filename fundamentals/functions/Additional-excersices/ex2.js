/* Write a function called multiplyNumbers that takes two numbers as inputs and prints the result.

*/

const prompt = require('prompt-sync')() /* */

const n1 = parseInt(prompt('please input first number: '))
const n2 = parseInt(prompt('please input second number: '))

function multiplyNumbers (n1, n2) {  /*aqui usamos los parametros entre parentesis   */
     
    const resultMultiply = n1 *n2

    console.log(resultMultiply)

}

multiplyNumbers(n1,n2)  /* igual llamamos a los parametros entre parentesis */
