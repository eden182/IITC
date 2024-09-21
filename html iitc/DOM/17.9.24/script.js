const contentDiv = document.getElementById("content");

contentDiv.style.backgroundColor = "blue";
contentDiv.style.color = "red";

const paragraphs = contentDiv.getElementsByClassName("text");

const listItems = document.querySelectorAll("#list");
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].textContent);
}

const hB = document.getElementById("highlightButton");

hB.addEventListener("click", function () {
  const container = document.querySelector(".container");
  if (container.style.backgroundColor === "yellow") {
    container.style.backgroundColor = "";
  } else container.style.backgroundColor = "yellow";
});

console.log(contentDiv);

const buttons = document.getElementById("buttons");
const addItemButton = document.getElementById("addItemButton");
const removeFirstButton = document.getElementById("removeFirstButton");
const removeLastButton = document.getElementById("removeLastButton");
const removeSelectedButton = document.getElementById("removeSelectedButton");

addItemButton.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  newItem.addEventListener("click", selectItem);
  buttons.appendChild(newItem);
});

function selectItem(event) {
  const previouslySelected = document.querySelector(".selected");
  if (previouslySelected) {
    previouslySelected.classList.remove("selected");
    previouslySelected.style.fontWeight = "normal";
  }
  event.target.classList.add("selected");
  event.target.style.fontWeight = "bold";
}

removeFirstButton.addEventListener("click", function () {
  const firstItem = buttons.firstElementChild;
  if (firstItem) {
    buttons.removeChild(firstItem);
  }
});

removeLastButton.addEventListener("click", function () {
  const lastItem = buttons.lastElementChild;
  if (lastItem) {
    buttons.removeChild(lastItem);
  }
});

removeSelectedButton.addEventListener("click", function () {
  const selectedItem = document.querySelector(".selected");
  if (selectedItem) {
    buttons.removeChild(selectedItem);
  }
});
