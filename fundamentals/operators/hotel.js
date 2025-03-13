/*
Crea un programa de Javascript que calcule la factura dotal de una persona en un hotel, donde cada habitacion tiene un precio de $100 por noche. aprovechando una oferta prompcional, que incluye un descuento de 5%

El programa debe solicitar al huesped el numero de noches que paso en el hotel para calcular la factura final.

Si el usuario ingresa que se quedo 5 noches, la salida sera $475.00

*/

const prompt = require('prompt-sync')()     /* esto es lo que se usa en Javascript para colectar un output esta es la funcion traida a este programa*/
/*const days = prompt ('digite los dias de su estadia -> ')  /* prompt devuleve un string*/

const days = parseInt( prompt ('digite los dias de su estadia -> '))   /* se le agrega el parseInt para mantener el tipo de data del input*/

const  pricePernight= 100 
const bundleDays =(days * pricePernight)
const finalDiscountPrice = bundleDays - (bundleDays * 0.05)


 
console.log(`
    Hotel Days Receipt \n
    cantidad de noches: ${days}\n
    final price: $${finalDiscountPrice}\n
 `)
