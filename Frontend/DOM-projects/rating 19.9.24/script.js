const balls = document.querySelectorAll(".ball");
let selectedBall = null;

balls.forEach((ball) => {
  ball.addEventListener("click", () => {
    if (selectedBall) {
      selectedBall.style.backgroundColor = "";
      selectedBall.style.color = "";
    }
    if (ball === selectedBall) {
      selectedBall = null;
    } else {
      ball.style.backgroundColor = "white";
      ball.style.color = "black";
      selectedBall = ball;
    }

    const selectedRating = selectedBall
      ? Array.from(balls).indexOf(selectedBall)
      : 0;
    localStorage.setItem("selectedRating", selectedRating);
    document.getElementById(
      "sel"
    ).innerText = `You selected ${selectedRating} out of 5`;
  });
});

document.getElementById("Button").addEventListener("click", function () {
  if (!selectedBall) {
    alert(
      "Please select a rating before proceeding, It is important for us to get your opinion!"
    );
  } else {
    window.open("./index2.html");
  }
});
