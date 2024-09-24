const button = document.querySelector(".but");
const input = document.getElementById("in");
const windowElement = document.querySelector(".window");

function addWindow() {
  const email = input.value.trim();

  if (email === "eden9876102@gmail.com") {
    windowElement.style.display = "flex";
    windowElement.style.position = "fixed";
  } else {
    alert("Please enter a valid Email before you continue!!");
    windowElement.style.display = "none";
  }
}

windowElement.addEventListener("click", function (event) {
  if (event.target === windowElement) {
    windowElement.style.display = "none";
    windowElement.style.position = "fixed";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    windowElement.style.display = "none";
    windowElement.style.position = "fixed";
  }
});

button.addEventListener("click", addWindow);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addWindow();
  }
});

function createDots() {
  const dotGrid = document.querySelector(".dot-grid");
  dotGrid.innerHTML = "";

  for (let i = 0; i < 128; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotGrid.appendChild(dot);
  }
}

createDots();
