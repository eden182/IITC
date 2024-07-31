// function isPalindrome(str) {
//   let length = str.length;
//   for (let i = 0; i < length; i++) {
//     // console.log(str[i]);
//     for (let j = 0; j < 1; j++) {
//       if (str[i] !== str[length - 1 - i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(isPalindrome(`natan`));

// function palindromeCheck(str) {
//   let isPalindrome = true;
//   for (let i = 1; i < str.length / 2; i++) {
//     for (let j = str.length; j >= str.length / 2; j--) {
//       if (str[i - 1] !== str[j - 1] && i + j === str.length + 1) {
//         isPalindrome = false;
//         break;
//       }
//     }
//     if (!isPalindrome) {
//       break;
//     }
//   }
//   if (isPalindrome) {
//     console.log(`${str} is a palindrome`);
//   } else {
//     console.log(`${str} is'nt a palindrome`);
//   }
// }
// palindromeCheck("banana");

// let person = {
//   name: "eden",
//   age: 24,
//   favFood: "burger",
//   city: "Bat-yam",
//   studentAt: "IITC",
// };
// let RAM = "16GB";
// let computer = {
//   name: "compy",
//   CFU: "itel core i7",
//   GFU: "intel iRIS xe",
//   RAM,
//   wallpaper: `luffy and zoro`,
// };

// console.log(`the name is: ${person.name}`);
// console.log(computer["RAM"]);
// // let propertyName = console.log(propertyName);

// // 1
// person = {
//   name: "Eden",
//   age: 24,
//   isStudent: true,
// };

// console.log(`the answer is: ${person.name} and ${person.age}`);
// person.isStudent = false;
// console.log(`is this person a student: ${person.isStudent}`);

// // let car = {
// //   make: "Honda",
// //   model: "civic",
// //   year: "2020",
// // };
// // console.log(car.model);
// // car.year = 2021;
// // console.log(car.year);

// let fruit = {
//   name: "pineapple",
//   color: "yellow",
//   sweetnessLv: 10,
// };
// console.log(fruit.name + " " + fruit.sweetnessLv);
// fruit.color = "black";

// if (fruit.color === "brown") {
//   console.log(
//     `the fruit got rotten with sweetness of: ${(fruit.sweetnessLv -= 3)}`
//   );
// } else if (fruit.color === "black") {
//   console.log(
//     `the fruit has gotten moldy with sweetness of: ${(fruit.sweetnessLv -= 7)}`
//   );
// }

// let book = {
//   title: "The good , the bad and the ugly",
//   author: "chuck Norris",
//   pages: 182,
// };
// console.log(book.author);
// console.log(book.pages + 50);

// let book_1 = {
//   title: "Ice age",
//   author: "sid",
//   pages: 66,
// };
// console.log(book_1.pages + 50);

// let animal = {
//   species: "tiger",
//   sound: "roar",
//   isWild: true,
// };
// console.log(animal.species + " " + animal.sound);

// animal.isWild = false;
// console.log(animal.isWild);

// if (animal.isWild !== true) {
//   console.log(`the ${animal.species} has been capture and caged`);
// }

// let animelKeys = Object.keys(animal);

// for (let i = 0; i < animelKeys.length; i++) {
//   //   console.log(animelKeys[i]);
//   //   console.log(animal[animelKeys[i]]);
//   console.log(`animal ${animelKeys[i]}: ${animal[animelKeys[i]]}`);
// }

// Object.values();
// Object.keys();

let car = {
  make: "mazda",
  model: "RX7",
  year: 2004,
  allKeys: function () {
    console.log(`details of car`, this.make, this.model, this.year, this.color);
  },
};
console.log(car.allKeys());
console.log(car.year);
car.year = 2000;
car.color = "red";
console.log(Object.values(car));

let carKeys = Object.keys(car);

for (let i = 0; i < carKeys.length; i++) {
  console.log(`car ${carKeys[i]}: ${car[carKeys[i]]}`);
}

let person = {
  name: "eden",
  age: 24,
  nickname: "shabibi",
};
let personKeys = Object.keys(person);
console.log(personKeys);
