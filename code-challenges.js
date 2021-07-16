// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const boilingPoint = (temp) => {
// -Conditional for boiling point
  if (temp === 212) {return "212 is at boiling point"}
// -Conditional for above boiling boilingPoint
  else if (temp > 212) {return `${temp} is above boiling point`}
// -Conditional for below boiling boilingPoint
  else if (temp < 212) {return `${temp} is below boiling point`}
}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))



// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

const combineArray = (array1,array2) => {
// -Combine the arrays using .concat
  let combinedArrays = array1.concat(array2)
// -Sort the combined arrays using .sort
//return combinedArrays.sort();
//console.log(combineArray(myNumbers1,myNumbers2))
// -Output is only sorted by the first digit
// -To fix needed to change the sort to include parameters
  return combinedArrays.sort(function(a,b){return a - b})
}
console.log(combineArray(myNumbers1,myNumbers2))




// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

const reverseString = (string) => {
// -Convert to array to be able to use .reverse
let array = string.split("")
// -Utilize the .reverse mutator
let reversedArray = array.reverse()
// -Join the arrays into a string with "" to get rid of spaces
return reversedArray.join("")
}
console.log(reverseString(myString1))
console.log(reverseString(myString2))


// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

const subtractSmall = (num1,num2) => {
  // -Conditional for determining if num1 is smaller than num2 (or equals to since then it doesnt matter which order you subtract in), if true then num1 needs to get subtracted from num2.
  if (num1 <= num2) {return num2 - num1}
  // -Catch all for subtracting the other way since the only other possibility is num1 is larger than num2.
  else return num1 - num2
}
console.log(subtractSmall(numberExample1,numberExample2))
console.log(subtractSmall(numberExample3,numberExample4))
console.log(subtractSmall(6,6))

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24


const subtractSmallNonNumbers = (num1,num2) => {
  // -added if statement which checks that the data type of num1 OR num2 is not a number. If true returns string message. Rest of code is the same with the only change being the first if statement being changed to else if.
  if (typeof num1 !== "number" || typeof num2 !== "number") {return "your input is not a number"}
  else if (num1 <= num2) {return num2 - num1}
  else {return num1 - num2}
}
console.log(subtractSmallNonNumbers(numberExampleRefactor1,numberExampleRefactor2))
console.log(subtractSmallNonNumbers(numberExampleRefactor3,numberExampleRefactor4))
