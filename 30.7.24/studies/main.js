function sumNestedNumbersArray(nestedNumbers) {
  let sum = 0;
  for (let i = 0; i < nestedNumbers.length; i++) {
    let currentArray = nestedNumbers[i];
    console.log(currentArray);
    for (let j = 0; j < currentArray.length; j++) {
      let currentNumber = currentArray[j];
      console.log(currentNumber);
      sum += currentNumber;
    }
  }
  console.log(`the sum is:${sum}`);
}
sumNestedNumbersArray([[5, 2], [3, 20, 10], [1]]);

function starsPattern() {
  for (let i = 1; i <= 5; i++) {
    let stars = " ";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars, i);
  }
}
starsPattern();

// function starsPattern_2() {
//   let stars = "";
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//       stars += "*";
//     }
//     stars += " ";
//   }
//   console.log(stars);
// }
// starsPattern_2();

function starsPattern_2() {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    stars += " \n";
  }
  console.log(stars);
}
starsPattern_2();

function multTable() {
  for (let i = 1; i <= 10; i++) {
    let line = `mult of ${i}: `;
    for (let j = 1; j <= 9; j++) {
      line += j * i + " ";
    }
    console.log(line);
  }
}
multTable();

// function searchInArray(array_1, target) {
//   let row;
//   let col;
//   for (let i = 0; i < array_1.length; i++) {
//     let currentArray_1 = Array_1[i];
//     console.log(currentArray_1);
//     for (let j = o; j < currentArray_1.length; j++) {
//       let currentNum = currentArray_1[j];
//       console.log(currentNum);
//       if (currentNum === target) {
//         row = i;
//         col = j;
//         break;
//       }
//     }
//     if (row !== null || coll !== null) {
//       break;
//     }
//   }
// }
// let array_1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// searchInArray(4);
