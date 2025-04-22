


//esta es la funcion que vamos a usar, ell this. permite acceder a los metodos
function  Account  (id, name, balance=0 ){

    this.id = id
    this.name =name
    this.balance = balance

///aqui se empieza a hacer los metodos (funciones) con el arrow function
    this.deposit = (amount) => {
        this.balance = this.balance + amount

    }
    this.withdraw = (amount) => {
        if (this.balance>=amount) {
            this.balance-= amount
            return amount
        }
        return null
    }

    
   return this 


} 

//aqui se crea el objeto y le asigna valores a los atributos establecidos 
const acc1 = new Account (1,'Anthony', 10000)
acc1.deposit(1000)
console.log(acc1)
acc1.withdraw(5000)