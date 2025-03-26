const prompt = require('prompt-sync')() 
const MIN_MONTHS_DURATION = 12
const MIN_RECHARGE_AMOUNT =20
const MAX_RECHARGE_AMOUNT = 80

const SUPER_PROMO_MIN_AMOUNT = 38
const SUPER_PROMO_MULTIPLIER = 2 

const MEGA_PROMO_MULTIPLIER = 3
const Mega_PROMO_MIN_DURATION = 36
const Super_Promo_Amount =

function calculateRecharge (amount, duration) {
    if (duration<MIN_MONTHS_DURATION) return amount

    let multiplier = 1

    if (duration > 36 ) {
        multiplier =MEGA_PROMO_MULTIPLIER

    }
    else if (
        amount< Super_Promo_Amount &&
        amount >FMAX_RECHARGE_AMOUNT &&
        amount
    ) {


    }
    return amount * multiplier
    


}

function main (){
    const name = parseFloat(prompt('name: '))
    const amount = parseFloat(prompt('monto recarga: '))
    const duration  = parseFloat(prompt('# years on service: '))

    const recharge = calculateRecharge(amount, duration)
    const promo = recharge - amount
    console.log(`
        THANKS ${name}!
        Recharge: $${recharge}
        Promo: $${promo}`


    )
}

main()

