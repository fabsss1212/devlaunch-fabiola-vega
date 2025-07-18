//creating fraction

// we are required to create the function within the object and outside the object.
//create the function that prints the fraction
const createFraction = (numerador, denominador) => {
    return {
        numerador,
        denominador
    }
}

const add = (f1, f2) => { 
    const numerator = (f1.numerador*f2.denominador) + (f1.denominador*f2.numerador)
    const denominador =f1.denominador * f2.denominador 
    return createFraction(numerator, denominador)
}




//create a variable with the fucntion using specific paramaters (3,4)
const f1 = createFraction(3,4)
const f2 = createFraction(2,3)
console.log(add (f1, f2))