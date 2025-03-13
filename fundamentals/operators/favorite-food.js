/* Escribe un programa simple en JavaScript que examine las preferencias culinarias de tres personas: Maria, Pepe y Malvern.

El programa analiza tres condiciones:

Comparte Maria la misma comida favorita que tanto Pepe como Malver?
La comida favorita de Maria coincide ya sea con la de Pepe o con la de Malvern?

La preferencia de Maria es diferent tanto de la de Pepe como la de Malver?

Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones, ejemplo: si la comida favorita de Maria es la pizza, la de Pepe es el pollo y el de Malvern es el pescado.

Los resultados de estas comparaciones se muestran luego, ofreciendo informacion sobre las similitudes y diferencias en las preferencias culinarias de los tres individuos.



*/

const prompt = require('prompt-sync')() 

const favFoodMaria = prompt ('what is your favorite food, Maria?-> ')
const favFoodPepe = prompt ('what is your favorite food, Pepe?-> ')
const favFoodMarlvern = prompt ('what is your favorite food, Malvern?-> ')

const isMariaAndPepeSameFavFood = favFoodMaria == favFoodPepe
const isMariaAndMalvernSameFavFood = favFoodMaria == favFoodMarlvern

const allMatch = isMariaAndPepeSameFavFood && isMariaAndMalvernSameFavFood
const someMatch = isMariaAndPepeSameFavFood || isMariaAndMalvernSameFavFood
const noMatch = isMariaAndPepeSameFavFood &&! isMariaAndMalvernSameFavFood


console.log (`does maria share the same fav food as both pepe and malver?: ${allMatch}`)
console.log (`does maria match either both pepe or  malver?: ${someMatch}`)
console.log (`does maria  preference differ from both pepes and malver? : ${noMatch}`)