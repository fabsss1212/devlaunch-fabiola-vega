
// para gestionar y manipular los datos salariales de manera eficiente es util encapsularlos en un sistema de clases. este enfoque proporciona una estructura clara y organizada para manejar las operaciones relacionadas con los salarios, asegurando la modularidad y la mantenibilidad del codigo.

//para implementar esto, crearemos una clase Employee con una variable principal llamada _salary, que servira como la base para todos los calculos de salario en el sistema.

//esta clase incluira dos metodos clave: un "getter" pare recuperar el salario actual y  un "setter" para modificarlo. Es importante que es "setter" valide que el nuevo valor del salario sea positivo ya que no se permiten salarios negativos.
//Adicionalmente se incluira un metodos giveRaise para aumentar el salario en un cantidad establecida

//aqui creamos un class so we can create the object from it.
class Employee {
    // constructor is a special method of the Employee class that is used to create and initialize objects created from that class.
    constructor(
     public _firstName: string,
     public _lastName: string,
     public _salary: number
  ) {
    //here we assign the values storaged on the public/private attributes using this.
    this._firstName = _firstName
    this._lastName= _lastName
    this._salary = _salary
} 
    //here the methods of get and set (functions) t
    set salary (salary: number) {
        if (salary >0){
        this.salary = salary
    }
        
}
///aqui es para printear el salario
    get salary () {
        return this._salary

    }
///aqui se ejecuta otro metodo de la clase, el aumento de salario
    givenRaise (extra: number){
        const newSalary = this._salary + extra
        return newSalary

    }

  }
  //aqui llenamos el objeto con los valores que especificamos en el class y lo imprimimos
  const e1 = new Employee ('Anthony', 'Soto', 18000)
  console.log (e1.givenRaise(2000))



