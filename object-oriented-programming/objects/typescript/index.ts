


const message: string ='hello world'

var something: string 

console.log('hi')


function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Alice", sayBye);