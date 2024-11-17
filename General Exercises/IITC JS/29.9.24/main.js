let numbers = [1, 2, 3, 4, 5];
let bigNums = [5, 8, -10, 12, 15, -1, 35, 50];
let repNums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6];
let greet = ["Hello", "world", "!"];
let fruits = ["Apple", "Banana", "Cherry", "Acerola"];
let boo = [false, true, false];
let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// q1
numbers.forEach((number) => {
  console.log(number);
});

// q2
numbers.forEach((number) => {
  console.log(number * 2);
});

// q3
numbers.forEach((number) => {
  console.log(number ** 2);
});

// q4
let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log(sum);

// q5
let str1 = "";

greet.forEach((string) => {
  str1 += string + " ";
});
console.log(str1);

// q6
let double = numbers.map((number) => number * 2);
console.log(double);

// q7
let indexFruits = fruits.map((string) => string.length);
console.log(indexFruits);

// q8
let root = numbers.map((number) => number ** 2);
console.log(root);

// q9
let cap = greet.map((string) => string.toUpperCase());
console.log(cap);

// q10
let newBoo = boo.map((Boolean) => !Boolean);
console.log(newBoo);

// q11
let evenNum = numbers.filter((number) => number % 2 === 0);
console.log(evenNum);

// q12
let big5 = fruits.filter((string) => string.length > 5);
console.log(big5);

// q13
let big10 = bigNums.filter((number) => number > 10);
console.log(big10);

// q14
let onlyA = fruits.filter((string) => string.startsWith("A"));

console.log(onlyA);

// q15
let inNums = bigNums.filter((number, index) => index % 2 === 0);
console.log(inNums);

// q16
let newSum = bigNums.reduce(function (total, number) {
  return total + number;
}, 0);
console.log(newSum);

// 18
let bigOne = bigNums.reduce((number, largest) =>
  number > largest ? number : largest
);
console.log(bigOne);

// q19
let fullString = greet.reduce((string, currentValue) => {
  return string + (string ? " " : "") + currentValue;
});

console.log(fullString);

// q20
let counts = repNums.reduce((number, currentValue) => {
  number[currentValue] = (number[currentValue] || 0) + 1;
  return number;
}, {});

console.log(counts);

// q21
let big3 = numbers.some((number) => number > 3);
console.log(big3);

// q22
let booEven = evenNumbers.every((number) => number % 2 === 0);
console.log(booEven);

// q23
let bigFru = fruits.some((string) => string.length > 7);
console.log(bigFru);

// q25
let booBoo = boo.some((boolean) => boolean === true);
console.log(booBoo);

// q26
let findBig3 = numbers.find((number) => number > 3);
console.log(findBig3);

// q27
let findEvenIndex = numbers.findIndex((number) => number % 2 === 0);
console.log(findEvenIndex);

// q28
let findBigFru = fruits.find((string) => string.length > 5);
console.log(findBigFru);

// q29
let findCherryIn = fruits.findIndex((string) => string === "Cherry");
console.log(findCherryIn);

// q30
let findNegga = bigNums.find((number) => number < 0);
console.log(findNegga);
