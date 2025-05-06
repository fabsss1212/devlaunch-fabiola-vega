
class Vehicle {
    private isOn: boolean

    constructor(
        protected emoji: string,
        protected brand: string,
        protected model: string,
        protected year: number 
) {
    this.emoji = emoji
    this.brand = brand
    this.model = model
    this.year = year
    this.isOn = false

    }

run() {
    this.isOn = true
}

toString() {
    return `emoji: ${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`

}

} 

class Car extends Vehicle {
    private isAirOn: boolean

    constructor(
    brand: string,
     model: string,
     year: number ,
    private numOfDoors: number = 4,
){  super ('', brand, model, year)
    this.isAirOn = false


}


}

class motorcylce extends Vehicle {
    private isAirOn: boolean

    constructor(
    brand: string,
     model: string,
     year: number ,
    
){  super ('', brand, model, year)
    this.isAirOn = false

}

wheelie () {
    return 'emoji rueda'
}

}

const car1 = new Car ('Hyundai', 'Tucson', 2020)

const motc1 = new motorcylce ('Toyota', 'F40', 2009)

console.log (car1.toString())

console.log (motc1.toString())