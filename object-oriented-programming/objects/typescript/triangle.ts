

interface Triangle {

    a: number
    b: number
    c: number


}
const t1: Triangle = {              /*  here we create the object, this is triangle and every side has its own measure.  this object contains 3 pieces of info  */
    a: 7,
    b:10,
    c: 5,                       
    }
const t2 = {              /*  here we create the object, this is triangle and every side has its own measure.  this object contains 3 pieces of info  */
        a: 2,
        b:3,
        c: 5,                       
        }
        
/*const validateTriangle = ((a, b, c )): Triangle ) =>{
    
    
        return (b+c) > a && (a+c) >b && (a+b) > c        /*  here we get to work with the function and return*/
    
    
   /* console.log(validateTriangle(t1))
    console.log(validateTriangle(t2))*/