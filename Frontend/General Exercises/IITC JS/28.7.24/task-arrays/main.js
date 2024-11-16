//1
let fruits = ["mango", "banana", "kiwi"];
//2
let numbers = [1, 2, 3, 4, 5];
//3
let colors = ["purple", "green", "blue"];
//4
let mixed = ["182", "hamburger", "true"];
//5
let seasons = ["summer", "winter", "spring", "autumn"];
//6
console.log(numbers.length);
//7
let emptyCheck = [];
if (emptyCheck.length === 0) {
  console.log("empty");
}
//8
let dynamic = ["i", "e", "f", "g"];
console.log(dynamic.length);
//9
dynamic.push("c");
console.log(dynamic.length);
//10
dynamic.shift();
console.log(dynamic.length);
//11
console.log(colors[0]);
//12
console.log(seasons[3]);
//13
//....??....
//14
let notIndex = fruits[4];
console.log(notIndex);
//15
console.log(`the second color is ${colors[1]}`);
//16
fruits[0] = "apple";
console.log(fruits[0]);
//17
numbers.pop();
numbers.push(10);
console.log(numbers[4]);
//18
numbers[2] = numbers[2] * 2;
console.log(numbers[2]);
//19
colors[0] = colors[0].toUpperCase();
colors[1] = colors[1].toUpperCase();
colors[2] = colors[2].toUpperCase();
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
//20
let y = seasons[0];
seasons.push(y);
let x = seasons[3];
seasons.unshift(x);
console.log(seasons[0] + " " + seasons[3]);
//21
fruits.push("orange");
//22
console.log(numbers.pop());
//23
colors.push(`black`, `brown`, `yellow`);
console.log(colors[4]);
//24
let num = [];
num.push(`1`, `2`, `3`, `4`, `5`);
console.log(num[3]);
//25
// for (i = 0; i >= num.length; i--) {
//   console.log(num[i]);
// }
//26
fruits.unshift("mango");
console.log(fruits[0]);
//27
console.log(numbers.shift());
//28
numbers.unshift(`7`, `8`, `9`);
console.log(numbers[0]);
//29
let newNum = [];
for (i = 5; i > 0; i--) {
  newNum.unshift(i);
  console.log(`new number has been add:`, newNum);
}
//30
for (i = 5; i > 0; i--) {
  newNum.shift(i);
  console.log(`new number has been taken:`, newNum);
}
//31
let I = colors.indexOf(`green`);
console.log(`index of green:`, I);
//32
let index = seasons.indexOf(`winter`);
console.log(`the index is:`, index);
//33
colors.push(`red`);
let LI = colors.lastIndexOf(`red`);
console.log(LI);
//34
let music = [`rap`, `rock`, `rap`, `pop`];
let index_1 = music.indexOf(`rap`);
let index_2 = music.lastIndexOf(`rap`);
console.log(
  `first time duplicate value:`,
  index_1,
  `second time is at:`,
  index_2
);
//35
if (music.indexOf(`pop`) !== length - 1) {
  console.log(`pop is in array`);
} else console.log(`no pop here`);
//36
let checkApple = fruits.includes(`apple`);
console.log(checkApple);
//37
let checkNumber = numbers.includes(10);
console.log(checkNumber);
//38
let checkColor = colors.includes(`blue`);
console.log(checkColor);
//39
let mixArrays = colors + fruits + numbers;
function Value() {
  if (mixArrays.includes(`banana`)) {
    console.log(`True`);
  } else console.log(`False`);
}
Value();
//40
if (numbers.includes(4)) {
  console.log(`we have 4`);
} else console.log(`don't have nothing`);
// 41
let cutNumbers = numbers.slice(0, 3);
console.log(`slice 3`, cutNumbers);
// 42
let lastColors = colors.slice(-2);
console.log(`the last two colors are:`, lastColors);
// 43
let extractSeasons = seasons.slice(3);
console.log(extractSeasons);
// 44
let colorsCopy = colors.slice();
console.log(`this is a copy:`, colorsCopy);
// 45
let colorsLength = colorsCopy.length;
console.log(colorsLength);
let cutColors = colorsCopy.slice(3, 5);
console.log(cutColors);
// 46
fruits.splice(2, 3);
console.log(fruits);
// 47
numbers.splice(0, 0, 68, 419, 3);
console.log(numbers);
//48
colors.splice(0, 0, `naranja`, `verde`, `blanco`);
console.log(colors);
// 49
colors.splice(0, 1, `negro`, `azul`);
console.log(colors);
// 50
colors.splice(0, colors.length);
console.log(`colors:`, colors);
// 51
fruits = [`mango`, `pineapple`, `orange`];
colors = [`green`, `crimson`, `purple`];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let colorFruits = fruits.concat(colors);
console.log(colorFruits);
// 52
let allArrays = colorFruits.concat(numbers);
console.log(allArrays);
// 53
allArrays = allArrays.concat(10, 11, 12);
console.log(allArrays);
// 54
allArrays = allArrays.concat(allArrays);
console.log(allArrays);
// 55
allArrays = allArrays.concat(`hi there`, 5, 10, 15, `blueberry`);
console.log(allArrays);
// 56
fruits = fruits.join();
console.log(fruits);
// 57
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers = numbers.join("-");
console.log(numbers);
// 58
colors = [`rojo`, `azul`, `amarillo`, `verde`];

function separatorArrey() {
  string = " , ";
  colors = colors.join(string);
  console.log(colors);
}
separatorArrey();
// 59
fruits = [`pen`, `pineapple`, `apple`, `pen`];
fruits = fruits.join(``);
console.log(fruits);
// 60
// ....??....
// 61
seasons = [`summer`, `winter`, `fall`, `autumn`];
seasons = seasons.reverse();
console.log(seasons);
// 62
// ....??....
// 63
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers = numbers.reverse().map(function (number) {
  return (number += 669);
});
console.log(numbers);

// 64
let instruments = "guitar, piano, violin, bass, drums";
console.log(instruments);
instruments = instruments.split(" ");
instruments.reverse();
instruments = instruments.join(" ");
console.log(instruments);

// 65
//....??....
// 66
fruits = [`apple`, `mango`, `dragon fruit`, `pineapple`, `strawberry`];
fruits.sort();
console.log(fruits);
