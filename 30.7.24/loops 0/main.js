// question 1
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// question 2
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// question 3
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// question 4
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// question 5
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// question 6
for (let i = 0; i <= 15; i += 3) {
  console.log(i);
}

// question 7
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// question 8
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// question 9
for (let i = 20; i >= 0; i -= 2) {
  console.log(i);
}

// question 10
for (let i = 0; i <= 25; i += 5) {
  console.log(i);
}

// question 11
for (let i = 0; i < 1; i++) {
  let star = "";
  for (let j = 0; j < 5; j++) {
    star += "*";
  }
  console.log(star);
}

// question 12
function greet() {
  let line = "";
  for (i = 1; i <= 3; i++) {
    line = "hello";
    console.log(line);
  }
}
greet();

// question 13
for (let i = 1; i <= 3; i++) {
  let line = " !";
  console.log(i + line);
}

// question 14
let abc = [`A`, `B`, `C`, `D`, `E`];
for (let i = 0; i < abc.length; i++) {
  console.log(abc[i]);
}

// question 15
for (let i = 0; i < 1; i++) {
  let count = 2;
  row = "";
  for (let j = 0; j < 4; j++) {
    row += count + " ";
  }
  console.log(row);
}

// question 16
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// question 17
arr = ["a", "b", "c", "d"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// question 18
arr = [10, 20, 30, 40, 50];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// question 19
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i += 2) {
  console.log(arr[i]);
}

// question 20
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// question 21
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
  console.log(sum);
}

// question 22
let product = 1;
for (let i = 0; i <= 5; i++) {
  product += i;
  console.log(product);
}

// question 23
arr = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    count++;
  }
}
console.log(count);

// question 24
arr = [10, 5, 8, 12, 3];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);

// question 25
sum = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// question 26
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += " * ";
  }
  console.log(row);
}

// question 27
for (let i = 0; i < 3; i++) {
  let text = "";
  for (let j = 0; j < 3; j++) {
    text += "*";
  }
  console.log(text);
}

// question 28
for (let i = 0; i < 3; i++) {
  let count = 1;
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += " " + count;
    count++;
  }
  console.log(row);
}

// question 29
for (let i = 1; i <= 4; i++) {
  row = "";
  for (let j = 1; j <= 4; j++) {
    row += j * i + " ";
  }
  console.log(row);
}

// question 30
count = 0;
for (let i = 0; i < 3; i++) {
  let row = "";
  count++;
  for (let j = 0; j <= i; j++) {
    row += " " + count;
  }
  console.log(row);
}
