/* Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100. 

*/

const prompt = require('prompt-sync')() /* */

const productprice = parseInt(prompt('please input the price of the article: ')) /* aqui pedimos  los datos  */
const iva = parseInt(prompt('please input the percentaje of the iva '))


function ShoppingFinalPrice (){                 
const finalPrice = productprice + (iva*productprice/100)    /* aqui desarollamos los que hace la funcion */
console.log ( 'el precio con iva es de ', finalPrice)
}

ShoppingFinalPrice()  /* aqui llamamos a nuestra funcion */ 


