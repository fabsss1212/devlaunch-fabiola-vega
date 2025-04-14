
const prompt = require('prompt-sync')() /* */

const nota1 = parseInt(prompt('digite la primera nota : ' ))  /* *aqui pedimos la entrada de datos */
const nota2 =parseInt(prompt('digite la segunda nota : ' ))
const nota3 = parseInt(prompt('digite la tercera nota : ' ))
const nota4 = parseInt(prompt('digite la cuarta nota : ' ))
const notaLab = 'C'

/* aqui caemos en la primera funcion,  si califica para beca, el primer criterio son notas mayores a 9 y cualquier nota de lab, el segundo es si tienen una calificacion de A o B en el lab pasan independientemente de las notas */

function isElegibleScholarship (nota1,nota2,nota3, nota4) {
    if (nota1 === 9 && nota2 === 9 && nota3 === 9 && nota4 === 9) {
        console.log('congrats! you are elegible')
    }

}  

isElegibleScholarship()