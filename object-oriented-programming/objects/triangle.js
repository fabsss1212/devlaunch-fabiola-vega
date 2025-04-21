const triangle = {

a : 7,
b : 10,
c : 5,

passtriangle: function ( ){
    // como esto es una funcion hay que definor adentro las variables sacandolas del objeto, se le agregan los atributos dentro del scope de la function del objeto
const a = triangle.a
const b = triangle.b
const c = triangle.c
 // se hace la comparacion, si es un triangulo valido la funcion retornara true
  if ((b+c)>a && (a+c)>b && (a+b)>c){
     return true
        
    }
}

}
console.log(triangle.passtriangle())

