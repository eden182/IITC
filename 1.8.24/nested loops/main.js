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
function abs(g) {
  let count = 0;
  for (let i = 0; i < g; i++) {
    let row = "";
    for (let j = 0; j < g; j++) {
      row += Math.abs(j - i) + " ";
    }
    console.log(row);
  }
}
abs(3);

// question 16
let lastLine = "*";
for (let i = 0; i < 4; i++) {
  lastLine += "*";
  let line = "";
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      line = "*";
    } else {
      if (j === i) {
        line += "*";
      } else {
        line += " ";
      }
    }
  }
  console.log(line);
}
console.log(lastLine);

// question 17
for (let i = 0; i < 4; i++) {
  let line = "";
  for (let j = 0; j < 4; j++) {
    line += Math.min(i, j) + " ";
  }
  console.log(line);
}

// question 18
for (let i = 0; i < 4; i++) {
  let line = "";
  for (let j = 0; j < 4; j++) {
    line += Math.max(i, j) + " ";
  }
  console.log(line);
}

// question 19
let currentCharCode = 65;
for (let i = 0; i < 8; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += String.fromCharCode(currentCharCode) + " ";
    currentCharCode++;
    if (currentCharCode > 90) {
      currentCharCode = 65;
    }
  }
  console.log(line);
}

// question 20
for (let i = 1; i <= 3; i++) {
  let line = "";
  for (let j = 1; j <= 3; j++) {
    let adding = j * i;
    let sum = (adding * (adding + 1)) / 2;
    line += sum + " ";
  }
  console.log(line);
}

// question 21
//....?....//

// question 22
function printDiamond(g) {
  for (let i = g; i <= g; i += 2) {
    let spaces = (g - i) / 2;
    console.log(" ".repeat(spaces) + "*".repeat(i));
  }
  for (let j = g - 2; j > 0; j -= 2) {
    let spaces = (g - j) / 2;
    console.log(" ".repeat(spaces) + "*".repeat(j));
  }
}

printDiamond(5);

// question 23
function Grid(size) {
  for (let row = 0; row < size; row++) {
    let rowValues = [];
    for (let col = 0; col < size; col++) {
      let value = row ** col;
      rowValues.push(value);
    }
    console.log(rowValues.join(" "));
  }
}
Grid(4);

// question 24
function Tri(g) {
  let num = 10;
  for (let i = 0; i <= g; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += " " + num--;
    }
    console.log(line);
  }
}
Tri(4);
