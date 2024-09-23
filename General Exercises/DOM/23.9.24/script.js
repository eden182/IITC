const dotGrid = document.querySelector(".dot-grid");

for (let i = 0; i < 128; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotGrid.appendChild(dot);
}
