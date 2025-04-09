
const cuantaBancaria = {              /*  here we create the object, this is triangle and every side has its own measure.  this object contains 3 pieces of info  */
    ID: 7,
    nameTitular:10,
    Balance: 5,                       
    }

    interface Account

function Account (id:number ,name: string, balance:number = 0) {
    this.id =id
    this.name = name
    this.balance = balance

    this.deposit = (amount:number) => {
      this.balance += amount
    }

    this.withdraw = (amount:number)  => {
        if (this.balance >= amount) {
            this.balance-= amount
            return amount 
         }
        
          return null
    }
}



    this.transfer = (toAccoun:Account, amount:number ) => {
        const cash = this.withdraw(amount)
        
        if (cash){
            toAccount.deposit(cash)
            return toAccount
        }
    }

    return this
}

const acc1 = new Account (1, `Anthony,`, 10000 ) 


const acc2 = new Account(2, 'Jose')

console.log (acc2.transfer(acc1, 5000))

console.log(acc2)
