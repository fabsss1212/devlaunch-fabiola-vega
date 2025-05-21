


//always generate magic numbers 
const max_atemps =50 
const min_dice_number =1
const max_dice_number =6
//el dado se puede representar con una funcion as below
const rollDice = () : number => {
    return Math.floor (Math.random()* max_dice_number) +min_dice_number
}

export const getCasinoProfits =(): number => {
    let profit = 0

    for (let i =1; i <= max_atemps; i++){

        const dice1 = rollDice()
        const dice2 = rollDice()
        const dice3 = rollDice()

        const sum = dice1 +dice2+ dice3 
        profit += (sum >=10) ? -10 : 15
    }
     return profit   
}

console.log (getCasinoProfits())