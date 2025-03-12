/* El evento es parte de las eliminatorias sudamericanas para la copa del mundo.
En un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina se enfrento al equipo visitante Brasil. El resultado final fue 1-0.
*/

const eventName = 'Eliminatorias Sudamericanas'
const day =22 
const month = 11
const year = 2023
const date = `${day}/${month}/${year}`

const hour = 20
const minutes = 30

const time = `${hour}:${minutes}`

const formatHour = hour - 12

const formatTime = `${formatHour}:${minutes}PM`
console.log(formatTime)
const localTeam = 'Argentina'
const awayTeam = 'Brasil'

const localTeamScore = 1
const awayTeamScore = 0

const score = `${localTeamScore} - ${awayTeamScore}`
console.log(eventName)
console.log(time)
console.log(localTeam, awayTeam)
console.log(score)

console.log(`
   Torneo: ${eventName} (${time})\n
   Equipos: ${localTeam} (${awayTeam})\n
   Resultado: ${score} 
    `)