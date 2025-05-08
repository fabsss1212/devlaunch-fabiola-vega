const cat = {                 /* creating an object is implies adding properties and actions to it. How is the cat? Color? Age? What does it do*/

     name: "Frijolito",
     age: 3,                /* here we can see the attributtes of the cat*/
     breed: "stray",
     
     /* The method is a function that is property of the object*/
     meow : function (){

        console.log("meow hooman 😹" )
     }
}
/*print their properties with the point syntax below:*/
console.log (`see my cat, their name is ${cat.name}`)
console.log (`see my cat, their age is ${cat.age} years old `)
console.log (`i found them in a dumpster, he is a ${cat.breed} `)

/*call their method using "object.function()*/
cat.meow()