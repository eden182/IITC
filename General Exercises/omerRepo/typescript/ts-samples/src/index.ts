// -------------------- Implicit Types -------------------- //
let firstName = "baba";
firstName = "lulu";
firstName = 5;

let num = 4;
num.toUpperCase();

let person = { name: "bob", age: 44 };
person.location = "USA";
person.name = true;
person = "banana";

let something;
something = 25;
something = "banana";
something = true;
something = { name: "John", age: 25 };
// any means anyting. avoid using it as much as possible!

let users = [{ id: "1", name: "babi" }, { id: "2" }];
users.push({ id: "9", name: "harry" }); // this is allowed
users.push({ id: "17" }); // this is allowed
users.push({ id: 1 }); // this is not allowed (id should be string)
users.push({}); // this is not allowed (id is required )

document.addEventListener("resize", function (ev) {
  console.log(ev.ctrlKey);
});

document.addEventListener("click", function (ev) {
  console.log(ev.ctrlKey);
});

function handleClick() {
  return "hi mom";
}

document.onclick = handleClick();
document.onclick = handleClick;

// const
const x = "baba";

// -------------------- Explicit Types -------------------- //
let num_1: number = 1;
let num_2: number = "baba";
num_2 = true;

let nickname_1: string = "babalulu";
let nickname_2: string = false;

let numsArray: number[] = [1, 2, 3];
let numsAndBoolArray: (number | boolean)[] = [1, 2, 3, true];

// real use case
let myData: null | string[] = null;

myData = ["mama , yorai"];

// Explicit are more useful in functions
// The reason why we use types in functions is to catch silly mistakes

// passing the wrong type of arguments
// bug in your code 👇
function sum(a: any, b: any) {
  return a + b;
}

sum(10, "20"); // "1020"

// no bug in your code 👇
function safeSum(a: number, b: number) {
  return a + b;
}

let z: any = 10;
let y: any = "20";

safeSum(z, y); // DO NOT USE ANY!
safeSum(10, "20");
let res = safeSum(10, 20);

// typescript know that res is of type 'number' even when we dont explicitly type it! great!
res.toLowerCase();

function render(str: string | null) {
  if (!str) return;
  document.body.innerHTML = str;
}

function sayHello(name: string | null) {
  if (!name) return "Hello Guest";
  return `Hello ${name.toUpperCase()}`;
}
// -------------------- Interface & Type -------------------- //

interface Person {
  name: string;
  age: number;
  location?: string;
}

let person_1: Person = { name: "John", age: 25 };
let person_2: Person = { name: "Bob", age: 51, location: "USA" };
let person_3: Person = { name: "Yariv", age: 12, baba: "bubu" };
let person_4: Person = { name: "Sara" };

interface Employee extends Person {
  salary: number;
}

let employee_1: Employee = {
  name: "John",
  age: 25,
  location: "USA",
  salary: 1000,
};

interface Data {
  id: string;
  body: string;
  [key: string]: string | boolean;
}

let data_1: Data = { id: "1", body: "dads", baba: "bubu", dada: false };
let data_2: Data = { body: "i dont have id...", baba: "bubu", lala: [] };

// Type
// Type is a way to define a type of a variable, but not limited to objects
// Type is more flexible than interface but it takes longer to compile (effect only in development)

type Age = number;
let age: Age = 25;
age = "25"; // ❌ this is not allowed

// union type
type Color = "red" | "green" | "blue";

type Task = {
  title: string;
  color: Color;
};

let task_1: Task = { title: "Task 1" };
let task_2: Task = { title: "Task 2", color: "red" };
let task_3: Task = { title: "Task 3", color: "yellow" }; // ❌ this is not allowed (color should be red, green or blue)

type TaskWithDeadline = Task & { deadline: Date };

let task_4: TaskWithDeadline = {
  title: "Task 4",
  color: "red",
  deadline: new Date(),
};

let task_5: TaskWithDeadline = { title: "Task 5", color: "green" }; // ❌ this is not allowed (deadline is required)

interface Post {
  title: string;
  content: string;
  isFeatured: boolean;
}

let posts: Post[] = [
  { title: "Post 1", content: "Content 1", isFeatured: true },
  { title: "Post 2", content: "Content 2", isFeatured: false },
  { title: "Post 3", content: "Content 3", isFeatured: "yes it does...?" },
];

// Implicit (dont count on it...)
const numbers = [2, true];
numbers.push(4);
numbers.push(false);
numbers.push("mama");

// Explicit
const strings: string[] = [];
strings.push(2);
strings.push(false);
strings.push("sda");

strings[0].toFixed();

let colors: Color[] = [];
colors.push("purple");
colors.push("red");

// Casting is a way to tell TypeScript that you know better than it does.
// be careful with casting!
function getStringMabye(str: string) {
  return Math.random() > 0.5 ? str : null;
}

// bad code! 👇
let result_1 = getStringMabye("hello") as string;
result_1.toLowerCase();

// real world example:
let input = document.getElementById("userInput") as HTMLInputElement | null;
if (input) {
  input.value = "Hello World!";
}

// -------------------- Generics -------------------- //

// Generics is a way to create reusable functions

// without generics
function unSafeReturnValueInArray(value: any) {
  return [value];
}

let unSafeNumberArray = unSafeReturnValueInArray(10);
let unSafeStringArray = unSafeReturnValueInArray("Hello World!");

unSafeNumberArray.push(1);
unSafeNumberArray.push("baba");

unSafeStringArray.push("baba");
unSafeStringArray.push(1);

// with generics
function safeReturnValueInArray<T>(value: T) {
  return [value];
}

let safeNumberArray = safeReturnValueInArray(10);
let safeStringArray = safeReturnValueInArray("Hello World!");
let safeBoolArray = safeReturnValueInArray(false);

safeNumberArray.push(1);
safeNumberArray.push("baba");

safeStringArray.push("baba");
safeStringArray.push(1);

safeBoolArray.push(2);
safeBoolArray.push("baba");
safeBoolArray.push(true);

// real use cases:
interface MyResponse<T> {
  items: T[];
  selectedItem: T | null;
}

let response_1: MyResponse<number> = {
  items: [],
  selectedItem: null,
};

response_1.selectedItem = 1;
response_1.selectedItem = "baba";
response_1.selectedItem = null;

response_1.items.push(13);
response_1.items.push("lala");
response_1.items.push(null);

let response_2: MyResponse<string> = {
  items: [],
  selectedItem: null,
};

response_2.selectedItem = 2;
response_2.selectedItem = "lulu";

response_2.items.push(2);
response_2.items.push("lulu");
