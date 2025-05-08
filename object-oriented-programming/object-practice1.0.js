//library creation
//this is the blueprint

const prompt = require('prompt-sync')() //siempre usar el import 

class Libro {

   constructor(title, author, releaseYear) { //mold to create new book
      this.title = title; //var title 
      this.author = author;
      this.releaseYear = releaseYear;


   }
   //assing it a method of if it read or not
   isread() {
      let message = " "// fill the var with the return function.method

      let alreadyRead = prompt("Have you read Atomic Habits? yes/no ")
      console.log (alreadyRead) 
      if (alreadyRead === 'yes') 
         message = 'you have read Atomic Habits, published by James Clear back in 2018'
      else
         message = 'please read the book'
      console.log (message)
   }

}

const ahBook = new Libro("AH", "JC", "2018")
ahBook.isread() 



