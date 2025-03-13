/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una escuela. Como parte de este desafio, primero configuras el entorno para recibir entradas de para recibir entradas del usuario, permitiendo que ingresen tres notas.

luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateado con maximo dos decimales, para asegurar una lectura clara.
si el usuario ingresa las calificaciones 80, 70 y 80, la salida sera: 80
*/
const prompt = require('prompt-sync')()

const grade1 = parseFloat( prompt ('digite la primera nota -> '))
const grade2 = parseFloat( prompt ('digite la segunda nota -> '))
const grade3 = parseFloat( prompt ('digite la tercera nota -> '))
const MAX_DIGITS = 2 
const numGrades = 3
const averageGrades = (( grade1 + grade2 +grade3 ) / numGrades)
console.log(`Final Grade: ${averageGrades.toFixed(MAX_DIGITS)}`)
 
console.log(`
    =================
    Promedio de notas
    ================= \n
    First grade: ${grade1}\n
    Second grade: ${grade2}\n
    Second grade: ${grade3}\n
    Grade's average ${averageGrades}
 `)
