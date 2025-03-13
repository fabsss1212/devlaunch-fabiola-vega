/*
Escribe un programa en Jacascript que solicite al usuario ingreesar el numero de dias y calcule el numero de meses y dias restantes, considerando que en un mes consta de 30 dias

Este programa utiliza el modulo prompt-sync para recibir interactivamente la entrada del usuario. Despues de calcular la cantidad de meses y dias restantessegun la entrada, el programa muestra un mensaje al usuario indicando el equivalaente en meses y dias restantes.

Como pista, puedes usar Math.floor() para redondear el resultado a un numero entero.

Si el usuario ingresa 100, la salida sera: 100 days are 3 months and 10 days.

*/
const DAYS_PER_MONTH = 30
const prompt = require('prompt-sync')()
const numDays = parseInt(prompt('digite el numero de dias -> '))


const numMonths = Math.floor(numDays / DAYS_PER_MONTH)
const singleDays = numDays %DAYS_PER_MONTH

console.log(`${numDays} days are ${numMonths} months and ${singleDays} days`)
