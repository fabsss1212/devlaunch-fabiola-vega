let email = "fabivega12@gmail.com";

const upperCaseOutputMessage = "Incorrect!";
const lowerCaseOutputMessage = "This email is valid, congrats!";
const mixedCaseOutputMessage = "This is mixed lower case, it has to be all lower case";


//you need to validate the data to make it print
function ValidateCaseType(email) {
    if (email === email.toLowerCase()) {
        return lowerCaseOutputMessage;
    } else if (email === email.toUpperCase()) {
        return upperCaseOutputMessage;
    } else {
        return mixedCaseOutputMessage;
    }
}

console.log(ValidateCaseType(email));
