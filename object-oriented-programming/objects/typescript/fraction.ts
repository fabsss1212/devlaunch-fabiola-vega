

interface Fraction { 
   
        numerator : number,
        denominator: number
}






const createFraction = (numerator:number, denominator:number): Fraction => {
    return {
        numerator,
        denominator
    }
}


const add = (f1:Fraction, f2:Fraction) => {
    const numerator= (f1.numerator*f2.denominator) + (f1.denominator * f2. numerator)
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator, denominator)
}

const substract = (f1:Fraction, f2:Fraction) => {
    const numerator= (f1.numerator*f2.denominator) - (f1.denominator * f2. numerator) 
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator, denominator)
}

const multiply = (f1:Fraction, f2:Fraction) => {
    const numerator= (f1.numerator*  f2.numerator)
    const denominator = f1.denominator * f2.denominator
    
    return createFraction(numerator, denominator)
}


const divide = (f1:Fraction, f2:Fraction) => {
    const numerator= (f1.numerator*  f2.denominator)
    const denominator = f1.denominator * f2.numerator
    
    return createFraction(numerator, denominator)
}


interface FractionWithOperators extends Fraction {
    add: (f2:Fraction) => Fraction
    substract: (f2:Fraction) => Fraction
    multiply: (f2:Fraction) => Fraction
    divide: (f2:Fraction) => Fraction
}






const createFractionWithFunctions = (numerator: number, denominator: number) => {
    const fraction = createFraction(numerator, denominator)
    return {
        ...f1,
        add: (f2:Fraction) => add (f1, f2),
        substract: (f2:Fraction) => substract (f1, f2),
        multiply: (f2:Fraction) => multiply (f1, f2),
        divide: (f2:Fraction) => divide (f1, f2),
    }

}





const f1 = createFraction(3,4)
const f2 = createFraction(2,3)


console.log (add(f1,f2))
console.log (substract(f1,f2))
console.log (multiply(f1,f2))
console.log(divide (f1,f2))

const f3 = createFractionWithFunctions(3,4)
const f4 = createFraction (2,3)

console.log (f3.add(f4))
console.log (f3.substract(f4))
console.log (f3.multiply(f4))
console.log (f3.divide(f4))