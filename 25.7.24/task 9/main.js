// question 1
let str = `the great king of persia`;

function strLen(str) {
  console.log(str.length);
}
strLen(str);

// question 2
function upperCase(str) {
  console.log(str.toUpperCase());
}
upperCase(str);

// question 3
function lowerCase(str) {
  console.log(str.toLowerCase());
}
lowerCase(str);

// question 4
function ind(str) {
  console.log(str.charAt(7));
}
ind(str);

// question 5
function ext(str) {
  console.log(str.substring(10, 14));
}
ext(str);

// question 6
let Persia = str.substring(18, 24);
function rep(Persia) {
  console.log(str.replace(Persia, `England`));
}
rep(Persia);

// question 7
function tri(str) {
  console.log(str.trim());
}
tri(str);

// question 8
function starts(str) {
  console.log(str.startsWith("the"));
}
starts(str);

// question 9
function ends(str) {
  console.log(str.endsWith("persia"));
}
ends(str);

// question 10
function find(str) {
  console.log(str.indexOf("persia"));
}
find(str);

// question 11
function spl(str) {
  console.log(str.split(0));
}
spl(str);

// question 12
function repe(str) {
  console.log(` ${str.repeat(10)} `);
}
repe(str);

// question 13
function mult(str) {
  console.log(str + " xerses");
}
mult(str);

// question 15
function extra(str) {
  console.log(str.slice(12, 13));
}
extra(str);

// question 17
function fin(str) {
  console.log(str.includes("persia"));
}
fin(str);

// question 18
function ret(str) {
  console.log(str[23]);
}
ret(str);

// question 19
function emp(str) {
  if (str.length === 0) {
    console.log(`empty`);
  } else console.log(`not empty`);
}
emp(str);

// question 20
function extrax(str) {
  console.log(str.slice(10, 24));
}
extrax(str);
