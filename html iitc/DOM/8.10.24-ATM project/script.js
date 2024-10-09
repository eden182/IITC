let content = document.getElementsByClassName("content")[0];
let content_2 = document.getElementsByClassName("content2")[0];
let continueButton = document.getElementsByClassName("butC")[0];
let passwordIn = document.getElementsByClassName("pass")[0];
let nameDisplay = document.getElementById("name");
let exitButton = document.getElementById("exit");

const customersList = [
  {
    firstName: "Alice",
    password: 1234,
  },
  {
    firstName: "Eden",
    password: 1620,
  },
  {
    firstName: "John",
    password: 4321,
  },
  {
    firstName: "Luffy",
    password: 6996,
  },
];

let customers = JSON.parse(localStorage.getItem("customers")) || customersList;
localStorage.setItem("customers", JSON.stringify(customers));

continueButton.addEventListener("click", function () {
  let enteredPassword = passwordIn.value.trim();

  let foundCustomer = customers.find(
    (customer) => customer.password == enteredPassword
  );

  if (foundCustomer) {
    nameDisplay.textContent = foundCustomer.firstName;
    content.style.display = "none";
    content_2.style.display = "flex";
  } else {
    alert("Incorrect password. Please try again.");
  }
});

exitButton.addEventListener("click", function () {
  content_2.style.display = "none";
  content.style.display = "flex";
});
