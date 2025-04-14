/*El Elite Fitness Center es un gimnasio boutque ubicado en Palo Alto, California, que ofrece membresias por $150 al mes.
Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados y cuanta con comodidades como sauna, piscina y clases grupales

*/

const gymName =  'Elite Fitness Center'
const gymType = 'boutique'

const location = `Palo Alto, California`

const membership = 150
const currency = `$`
const duration = `mes`

const openingTime = 6
const closingTime= 22

const  numCertifiedTrainers = 10

const amenity1 = 'sauna'
const amenity2= 'piscina'
const amenity3 = 'clases grupales'

console.log(`
    Nombre Gym: ${gymName} (${gymType})\n
    Location: ${location}\n
    Price: ${currency} ${membership}/${duration}\n
    Time:  ${openingTime}:00-${closingTime-12}:00\n
    Team: ${numCertifiedTrainers} certified trainers\n
    Amenities: ${amenity1}, ${amenity2}, ${amenity3}
     `)