// question 1
let text = `hello world!`;
function greet(text) {
  console.log(text);
}
greet(text);

// question 2
let num = 240;
function square(num) {
  console.log(num * num);
}
square(num);

// question 3
num = 240;
function isEven(num) {
  if (240 % 2 === 0) {
    console.log(`it's an even number`);
  } else if (240 % 2 !== 0) {
    console.log(`it's not an even number`);
  }
}
isEven(num);

// question 4
let firstName = "eden";
let lastName = "shabi";
let fullName;
function getFullName(fullName) {
  console.log(`your full name: ${firstName + " " + lastName}`);
}
getFullName(fullName);

// question 5
let num_1 = 17;
let num_2 = 52;
function sumTwo(num_1, num_2) {
  console.log(`the sum is: ${num_1 + num_2}`);
}
sumTwo(num_1, num_2);

// question 6
let number_1 = 60;
let number_2 = 11;
function multy(number_1, number_2) {
  console.log(`the sum is: ${number_1 * number_2}`);
}
multy(number_1, number_2);

// question 7
let name = "yosef";
function greetPerson(name) {
  console.log(`hello ${name}!`);
}
greetPerson(name);

// question 8
number = 66;
function getAbsoluteValue(number) {
  if (number < 0) {
    console.log(`${number} is negative`);
  } else if (number >= 0) {
    console.log(`${number} is positive`);
  }
}
getAbsoluteValue(number);

// question 9
num_1 = 60;
num_2 = 40;
let average;
function calculateAverage(average) {
  let add = num_1 + num_2;
  console.log(add / 2);
}
calculateAverage(average);

// question 10
let str = `rock and roll!!!`;
function convertTo(str) {
  console.log(str.toUpperCase());
}
convertTo(str);

// question 11
num = -333;
function isPositive(num) {
  if (num >= 0) return "the number is: positive";
  else if (num < 0) return "the number is: negative";
}
console.log(isPositive(num));

// question 12
str = "cool";
function getFirstChar(str) {
  console.log(str[0]);
}
getFirstChar(str);

// question 13
let height = 200;
let width = 34;
let rectangle = height * width;
function areaOfRectangle(rectangle) {
  console.log(`rectangle number is: ${rectangle}`);
}
areaOfRectangle(rectangle);

// question 14
num_1 = 45;
num_2 = 56;
function remainderDivision(num_1, num_2) {
  console.log(num_1 / num_2);
}

remainderDivision(num_1, num_2);

// question 15
let dude;
function logType(dude) {
  dude = "bro";
  console.log(typeof dude);
}
logType(dude);

// question 16
let isStudent = true;
function invertBoolean(isStudent) {
  console.log(isStudent !== true);
}
invertBoolean(isStudent);

// question 17
let firstNick = "the";
let secondNick = " king";
let fullNick;
function concatenateStrings(fullNick) {
  console.log(firstNick + secondNick);
}
concatenateStrings(fullNick);

// question 18
let firstNum = 222;
let secondNum = 22;

function findSmaller(firstNum, secondNum) {
  if (firstNum > secondNum) {
    console.log(`the first number is bigger`);
  } else if (secondNum > firstNum) {
    console.log(`the second number is bigger`);
  } else if ((firstNum = secondNum)) {
    console.log(`the numbers are identical`);
  }
}
findSmaller(firstNum, secondNum);

// question 19
name = "eden";

function greetWithDefaul(name) {
  if (name === undefined) {
    console.log(`welcome guest`);
  } else console.log(`welcome ${name}`);
}
greetWithDefaul(name);

// question 20
let string = "the king was naked thinking he's fully clothed";
function isLongString(string) {
  if (string.length > 10) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isLongString(string);

console.log(string.length);
