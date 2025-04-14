
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

greet("Alex", function() {
  console.log("Welcome!");
});

 