// question 1
function stars(g) {
  let star = "";
  for (let i = 1; i <= 2; i++) {
    for (let j = 0; j < g; j++) {
      star += "* ";
    }
    star += `\n`;
  }
  console.log(star);
}
stars(12);

// answer 1
for (let i = 0; i < 2; i++) {
  let star = "";
  for (let j = 0; j < 2; j++) {
    star += " *";
  }
  console.log(star);
}

// question 2
function printNum(g, h) {
  let count = 1;
  for (let i = 0; i < g; i++) {
    let row = "";
    for (let j = 0; j < h; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
printNum(2, 2);

// question 3
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += " * ";
  }
  console.log(row);
}

// upside down
for (let i = 3; i >= 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += " * ";
  }
  console.log(row);
}

// question 4
function cell(g) {
  for (let i = 1; i <= g; i++) {
    let sum = "";
    for (let j = 1; j <= g; j++) {
      sum += i + j + " ";
    }
    console.log(sum);
  }
}
cell(3);

// question 5
function luahHakefel(g) {
  for (let i = 1; i <= g; i++) {
    let row = "";
    for (let j = 1; j <= g; j++) {
      row += i * j + " ";
    }
    console.log(row);
  }
}
luahHakefel(3);

// question 6
function Square(g) {
  for (let i = 0; i < g; i++) {
    let star = "";
    for (let j = 0; j < g; j++) {
      if (i === 0 || i === g - 1 || j === 0 || j === g - 1) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}
Square(3);

// question 7
function numbers(g) {
  let count = 1;
  for (let i = 0; i < g; i++) {
    let row = "";
    for (let j = 1; j <= g; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
numbers(3);
// question 8
function numb(g) {
  let count = 2;
  for (let i = 0; i < g; i++) {
    let row = "";
    for (let j = 1; j <= g; j++) {
      row += count + " ";
      count += 2;
    }
    console.log(row);
  }
}
numb(3);

// question 9
function tri(h) {
  let count = 1;
  for (let i = 0; i < h; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += count + " ";
      count++;
    }
    console.log(row);
  }
}
tri(3);

// question 10
for (let i = 0; i < 3; i++) {
  let sum = 1;
  for (let j = 0; j < 3; j++) {
    if ((i + j) % 2 === 0) {
      sum += `0`;
    } else sum += `1`;
  }
  console.log(sum);
}

// question 11
for (let i = 0; i < 3; i++) {
  let row = "";
  let count = 1;
  for (j = 0; j < 3; j++) {
    row += count + i + " ";
  }
  console.log(row);
}

// question 12
for (let i = 0; i < 3; i++) {
  let row = "";
  let count = 1;
  for (j = 0; j < 3; j++) {
    row += count + j + " ";
  }
  console.log(row);
}

// question 13
for (let i = 0; i < 3; i++) {
  let sum = 0;
  for (let j = 0; j < 3; j++) {
    if ((i + j) % 2 === 0) {
      sum += `0`;
    } else sum += `x`;
  }
  console.log(sum);
}

// question 14
function odd(h) {
  let count = 1;
  for (let i = 0; i < h; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += count + " ";
      count += 2;
    }
    console.log(row);
  }
}
odd(4);

// question 15
.
