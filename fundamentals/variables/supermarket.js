/*Voy  supermercado GreenCenter para hacer mis compras habituales y planeo comprar manzanas y naranjas. Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
Veo que 3 cajeros estan trabajando, asi que me preparo para pagar.
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y recibo $50 d cambio.
*/

const supermarket = 'GreenCenter'



const fruit1 = 'manzana'
const fruit2 = 'naranja'

const platanoAvailable = false
const naranajaAvailable = false

const spareChangeInPocket = 150
const totalPrice = 100
const vueltoDollars = 50


console.log(`
    Nombre Market: ${supermarket}\n
    Payment: ${spareChangeInPocket}
    Total: ${totalPrice}\n
    Change: ${vueltoDollars} $\n
    Items purchases: ${fruit1}, ${fruit2}
     `)