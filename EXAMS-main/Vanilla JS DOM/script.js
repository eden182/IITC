function showAlert() {
  alert("Button clicked!");
}

const button = document.getElementById("trigger-button");
button.addEventListener("click", showAlert);

const userList = ["Alice", "Bob", "Charlie"];

const ulElement = document.createElement("ul");
ulElement.classList.add("user-list");

for (let i = 0; i < userList.length; i++) {
  const liElement = document.createElement("li");
  ulElement.appendChild(liElement);
}

document.body.appendChild(ulElement);

const items = document.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
  items[i].textContent = `Item ${i + 1}`;
}

document
  .getElementById("simple-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name").value;

    if (nameInput === "") {
      alert("Name is required.");
    } else {
      alert(`Hello, ${nameInput}!`);
    }
  });

const settings = {
  theme: "dark",
  language: "en",
};

console.log(settings.color);

function updateMessage() {
  const messageBox = document.getElementById("message-box");
  messageBox.textContent = "Hello, welcome to the exam project!";
}

updateMessage();

function findLongestWord() {
  let fruits = ["apple", "banana", "cherry"];
  let str = "";
  let count = 0;
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits[i].length; j++) {
      count += j;
    }
    if (fruits[i].length > count) {
      str += fruits[i];
    }
  }
  console.log(str);
}

findLongestWord();
