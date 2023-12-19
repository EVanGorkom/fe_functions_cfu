// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
// function greeting() {
//   console.log("Hello there!");
// }
// greeting();

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
// function customGreeting(name) {
//   console.log("Hello there " + name + "!");
// }
// customGreeting("David");

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
// function greetPerson(firstName, middleName, lastName) {
//   console.log("Hello " + firstName + " " + middleName + " " + lastName + " it's a pleasure to meet you!");
// }
// greetPerson("Alistair", "Marion", "Crawley");

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
// function square(num) {
//   var square_value = num * num;
//   console.log("The square of " + num + " is equal to " + square_value);
// }
// square(1);
// square(2);
// square(3);
// square(4);

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

// function checkStock(stock_num, name) {
//   if (stock_num <= 0) {
//     console.log(name + " - OUT of stock!");
//   } else if (stock_num <= 3) {
//     console.log(name + " - running LOW!");
//   } else {
//     console.log(name + " is stocked.");
//   }
// }

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"