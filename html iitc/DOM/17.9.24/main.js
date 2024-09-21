const contentDiv = document.getElementById("content");
contentDiv.style.backgroundColor = "blue";
contentDiv.style.color = "red";
const paragraphs = contentDiv.getElementsByClassName("text");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

const listItems = document.querySelectorAll("#list li");
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].textContent);
}

const highlightButton = document.getElementById("highlightButton");
highlightButton.addEventListener("click", function () {
  listItems.forEach((item) => {
    item.style.backgroundColor = "yellow";
  });
});

console.log(contentDiv);
