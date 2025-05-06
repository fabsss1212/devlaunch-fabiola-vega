
class Animal { 
    constructor( ///put the attributes of the animal and specify what type of data they are
       public name: string,
       public species: string,
       public age: number,
) {
  this.name = name
  this.species = species 
  this.age = age


}

makeSound(){ //aqui hacemos la funcion para retornar un sonido, en este caso vacio
    return ' '
}

toString(){
    return `
    Name: ${this.name}
    Species: ${this.species}
    Age: ${this.age}
    `
}
}

class Lion extends Animal {
    constructor(
    name: string,
    species: string,
    age: number,
 ) 
       {
        super(name, species, age)
    }

    makeSound(): string {
        return 'roar...'
    }

    toString(): string {
        const info=  this.toString  ()
        return `🦁 :\n${info}`
    }
}

type ElephantSize = 'small' | 'medium' | 'large' 


class Elephant extends Animal {
    constructor (   
        name: string,
        species: string,
        age: number,
        private size: ElephantSize
        ) {
            super (name, species, age)
        }
        makeSound(): string {
            return 'prhhhh...'
        }
    
        toString(): string {
            const info=  this.toString  ()
            return `🐘 :\n${info}`
        }

}

const l1 = new  Lion ('Simba', 'King', 8)
console.log(l1.makeSound())
console.log(l1.toString)

const elep1 = new  Elephant ('Dumbo', 'gray', 8, 'small')
console.log(l1.makeSound())
console.log(l1.toString)

