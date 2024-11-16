"use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// // TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity;
}

updateCity(person, "Bat-Yam");
console.log("Updated Person:", person);

// /////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];
// // TODO: Write a function to return an array of student names
function getStudentNames(students) {
  let res = [];
  for (let i = 0; i < students.length; i++) {
    res.push(students[i].name);
  }
  return res;
}

let names = getStudentNames(students);
console.log("Student Names:", names);

// // TODO: Write a function to find a student by ID
function getStudentById(students) {
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    let keyName = students[i].name;
    arr.push(keyName);
  }
  return arr;
}

students = getStudentById(students);
console.log("Found Student:", students);

// // TODO: Write a function to add a new student to the array

function addStudent(students, newStudent) {
  students.push(newStudent);
  return students;
}
let newStud = { id: 4, name: "eden", age: 23 };
addStudent(students, newStud);
console.log("Updated Students:", students);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// // // TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  let newAvail = false;
  product.isAvailable = newAvail;
  if (product.isAvailable !== true) {
    return `the ${product.name}: is not in stock`;
  }
}
console.log(toggleAvailability(product));

// // // TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  if (newPrice !== product.price) {
    product.price = newPrice;
    return newPrice;
  }
}
updatePrice(product, 1500);
console.log("Updated Product:", product);

// // TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
  let updateCategory = product.categories.indexOf(category);
  if (updateCategory !== -1) {
    product.categories.splice(updateCategory, 1);
  }
}
removeCategory(product, "tech");
console.log("Updated Product:", product);

// /////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// // TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  let mostExpensive = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }
  return mostExpensive;
}
let expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

// // TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  let arr = [];
  for (let i = 0; i < products.length; i++) {
    arr += products[i].name + ": " + products[i].sizes + " ";
  }
  return arr;
}

let sizes = getAvailableSizes(products);
console.log("Available Sizes:", sizes);

// /////////////////////////////////////////////////////

let student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  if (student.name === "Alice") {
    student[key] = value;
  }
  return student;
}

addProperty(student, "grade", "A");
console.log("Updated Student:", student);

// /////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// // TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  school.students[studentId - 1].grades[subject] = newGrade;
}

updateStudentGrade(school, 1, "math", 90);
console.log("Updated School:", school);

// /////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// // TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  let arr = [];
  for (let i = 0; i < orders.length; i++) {
    let deliverStat = orders[i].status;
    let products = orders[i].product;
    if (deliverStat === "delivered") {
      arr.push(products);
    }
  }
  return arr;
}
let deliveredOrders = getDeliveredOrders(orders);
console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  let prod = {};
  for (let i = 0; i < orders.length; i++) {
    let proCount = orders[i].product;
    if (!prod[proCount]) {
      prod[proCount] = 1;
    } else {
      prod[proCount]++;
    }
  }
  return prod;
}
let productCounts = countProductOccurrences(orders);
console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
