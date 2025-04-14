
const prompt = require('prompt-sync')() 

const REJECT_ASSISTANT_GRADE = 'C'
const AMOUNT_OF_GRADES = 4
const MIN_GRADE = 8
const average = 0

function validateScholarship(grade1, grade2, grade3, grade4, assistantGrade){
  if (assistantGrade === 'C')  return false

  if (grade1 < MIN_GRADE || grade1 < MIN_GRADE || grade1< MIN_GRADE || grade1< MIN_GRADE ) {
    return false 
  }
  const average = (grade1,grade2, grade3,grade4) / AMOUNT_OF_GRADES 

  if (average < 8.5) {
    return false
  } else {
    if (average < 9 && assistantGrade!=='A' || assistantGrade!= 'B'){}
       
    }
  
  return true
}
console.log(average)
 function main() {    
   const grade1 = parseInt(prompt ('grade1: '))
   const grade2 = parseInt(prompt ('grade2: '))
   const grade3 = parseInt(prompt ('grade3: '))
   const grade4 = parseInt(prompt ('grade4: '))

    const assistantGrade = prompt( 'Assistant Grade (A, B , C): ')
    
    const isEligible = validateScholarship(grade1, grade2, grade3, grade4, assistantGrade)

    if (isEligible){
        console.log('congrats! you are elegible')
    } else {
        console.log('sorry,you are not elegible')
    }

   
    
}

main()
