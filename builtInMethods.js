// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// This checks to see if the argument "Hello" is present in the object before it. It will return a boolean.
"Hello World".includes("Hello");

// This checks to see if the object ends with the value equivalent to "Hello". It will return a boolean.
"Hello World".endsWith("Hello");

// As above.
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Ethan";
console.log(firstName.charAt(0));
var catName = "Vader";
console.log(catName.length);

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.
var philosophers = ["Aristotle", "Plato", "Socrates"];
var books = ["Nicomachean Ethics", "The Republic", "5 Dialogues"]

for (i = 0; i < philosophers.length; i++) {
  console.log(philosophers[i])
}

for (i = 0; i < books.length; i++) {
  if (books[i].startsWith("Nico")) {
    console.log(books[i]);
  }
}