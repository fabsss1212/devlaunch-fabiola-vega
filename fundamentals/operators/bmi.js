/* Escribe un programa sencillo en JavaScript que calcule y muestre el indice de masa corporal (IMC) de un usuario. El programa debe solicitar al usuario su nombre, altura en metros y peso en kilogramos.

Calcula el IMC utilizando la formula

IMC = weight / height ^2

Nombre: John
Altura: 1.75
Peso: 70

*/
const prompt = require('prompt-sync')()  

const name = prompt ('name -> ')
const weigth = parseFloat( prompt ('weigth -> '))
const height = parseFloat( prompt ('height -> '))

const IMC = weigth / Math.pow(height, 2)

console.log (`Hi ${name}, your BMI is ~${IMC.toFixed(2)}`)