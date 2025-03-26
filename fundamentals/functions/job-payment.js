const prompt = require('prompt-sync')()

const calculateSalary = (hourlyRate, startTime, endTime) => {
  const[startHour]  = startTime.split(':')
  const[endHour]  = startTime.split(':')
  const workedHours = endHour - startHour
  console.log(workedHours)
  let salary = 0


  if (workedHours  <=8) {
    salary = hourlyRate*workedHours
  } else {
    const extraHours = workedHours-8
    salary = (hourlyRate*8) + ((extraHours*hourlyRate)*1.5)

  }
  return salary 
}
function main() {
const hourlyRate = parseFloat(prompt('hourly rate $: '))
const startTime = prompt('start at: ')
const endTime = prompt('end  at: ')

const salary = calculateSalary(hourlyRate, startTime, endTime)


}


main ()