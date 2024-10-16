const plusButtons = document.querySelectorAll(".plus");

plusButtons.forEach((plusButton) => {
  plusButton.addEventListener("click", () => {
    plusButton.classList.toggle("button-active");
    const answer = plusButton.parentElement.nextElementSibling;
    if (answer.style.display === "flex") {
      answer.style.display = "none";
    } else {
      answer.style.display = "flex";
    }
  });
});
