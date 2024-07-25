const firstName = "eden ";
const lastName = "shabi";
const age = 24;
let isStudent = true;
if (true) {
  console.log(firstName + lastName + " is student");
}
let isAdult = age >= 18;
if (age < 18) {
  console.log("is not adult");
} else age >= 18;
{
  console.log("is adult");
}
const isJohn = "is john";
if (isJohn === firstName) {
  console.log("is john");
} else {
  console.log("is not john");
}

function greet(firstName, lastName) {
  console.log(
    "hello " + fullName.toUpperCase() + " welcome to the IITC bootcamp"
  );
}
let fullName = firstName + lastName;
greet();

//function checkAge(age) {
//if (age < 13) return "is a child";
//else if (age > 13 && age < 17) return "you are a teen";
//else if (age > 18 && age < 64) return "you are an adult";
//else if (age > 64) return "you are a senior";}

//let result = checkAge(age);
//console.log(result);

// let dayOfWeek = "thursday"

// function getDayMessage(dayOfWeek){
// switch (dayOfWeek){
// case "sunday": console.log("good morning");
// break;
// case "monday": console.log("go to work");
// break;
// case "tuesday": console.log("hello dude");
// break;
// case "wendesday": console.log("sap");
// break;
// case "thursday": console.log("last day of the week hell yea");
// break;
// case "friday": console.log("partyyy");
// break;
// case "saturday": console.log("let me sleep");
// break;
// default: console.log("invalid day")}}
// let result = getDayMessage(dayOfWeek)

// function cheakEligibility(isStudent , age){
// if(age < 18 && isStudent === true) console.log("you are a minor student");
// else if(age < 18 && isStudent === false) console.log("you are a minot non student");
// else if(age >= 18 && isStudent === true) console.log("you are a young adult student");
// else if(age >= 18 && isStudent === false) console.log("you are a young adult non student");
// else if(age > 25 && isStudent === false) console.log("you are an adult non student");}
// console.log(cheakEligibility(isStudent , age));

// function formatName(name){
// if (name === "admin") return "welcome admin";
// else return ("hello"+ name)}
// console.log(formatName(name))

// const isMember = true
// function checkDiscount(age , isMember){
// if (age < 18)
// {if (isMember) return "you get a 20% discount"
// else return "you get a 10% discount";}{
// if (age > 18 && age < 64) return "you get a 10% discount"
// else return ("you do not get a discount")}};
// console.log (checkDiscount(age , isMember));

const storedUserName = "theGreat";
const storedPassword = "1620";
function validateLogin(userName, password) {
  if (storedUserName === userName) {
    if (storedPassword === password) return "login successful";
    else return "invalid login name or password";
  }
}

let userName = "theGreat";
let password = "1620";
console.log(validateLogin(userName, password));

function extractInitials(firstName, lastName) {
  console.log(
    ("first character:", firstName[0]) + "." + ("first character:", lastName[0])
  );
}

console.log(extractInitials(firstName.toUpperCase(), lastName.toUpperCase()));

const email = "eden9876102@gmail.com";
function maskEmail(email) {
  return "replace:", email.replace("eden9876102", "***********");
}
console.log(maskEmail(email));
