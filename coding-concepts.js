// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer:
//      12
// b) Verify and explain:
//      My answer was correct because the length of the string is displayed.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer:
//      l
// b) Verify and explain:
//      My answer was correct because it is outputing the 4th value in the string.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer:
//      "Ruby"
// b) Verify and explain:
//      My answer was correct because the variable index is set to 1 which calls the second value in the array. Although the answer was not displayed as a string.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer:
//      ["SATURDAY", "SUNDAY"]
// b) Verify and explain:
//      My answer was incorrect because of error ".toUpperCase is not a function." I found out that to get the desired output you need to .map the array value to itself but with .uppercase.
// Example:
// const uppercased = weekendDays.map(weekendDays => weekendDays.toUpperCase())
// console.log(uppercased)

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer:
//      number
// b) Verify and explain:
//      My answer was correct because although the datatypes are strings once you use .length the output changes to a number.
