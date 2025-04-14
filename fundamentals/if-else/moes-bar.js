
const prompt = require('prompt-sync')() 
const birthdates = prompt ("What is your birthdate in format (YYYY/MM/DD)?  ")

const today = new Date()
const birthday = new Date (birthdates)

const age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
     today.getMonth() > birthday.getMonth ||
     (
        today.getMonth() === birthday.getMonth() &&
        today.getDay>= birthday.getDay() 
     )
)
console.log (birthdayPassed)
if (birthdayPassed) {
    age--
}
console.log (age)

if (age >=18 ){

    console.log ('bienvenido al bar de moe')
 } else {
    console.log ( 'no puedes pasar al bar')
    }

