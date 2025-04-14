const prompt = require('prompt-sync')() 

const n = parseInt(prompt('input a number -> '))

if  (n>0) {     
    console.log(` positive `)
}

if  (n<0) {     
    console.log(` negative `)
}

if  (n===0) {     
    console.log(` cero `)
}
else (
    console.log(` por favor, introduce un numero `)

)