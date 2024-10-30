const body = document.body;
const html = document.documentElement;
const colorButtons = document.querySelectorAll(".dayMode");
const colorButtonContainers = document.querySelectorAll(".inDayMode");
const signContainer = document.querySelector(".sign");
const logContainer = document.querySelector(".log");
const logButton = document.querySelector(".logBut");
const signButton = document.querySelector(".signBut");

let isCustomColors = false;

// Open log container on load
window.addEventListener("load", () => {
  if (sessionStorage.getItem("showLog") === "true") {
    logContainer.style.display = "flex";
    signContainer.style.display = "none";
    sessionStorage.removeItem("showLog");
  }
});

// changes to log
logButton.addEventListener("click", () => {
  signContainer.style.display = "none";
  logContainer.style.display = "flex";
});

// changes to sign
signButton.addEventListener("click", () => {
  logContainer.style.display = "none";
  signContainer.style.display = "flex";
});

// Day mode toggle
colorButtons.forEach((colorButton, index) => {
  colorButton.addEventListener("click", () => {
    isCustomColors = !isCustomColors;
    body.classList.toggle("custom-colors-active", isCustomColors);
    html.classList.toggle("custom-colors-active");
    colorButtonContainers[index].style.justifyContent = isCustomColors
      ? "flex-start"
      : "flex-end";
    colorButton.textContent = isCustomColors ? "Day" : "Night";
    colorButton.classList.toggle("button-active", isCustomColors);
  });
});

// Save to local storage
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector(".submit");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const firstName = document
      .getElementById("signName")
      .value.trim()
      .toLowerCase();
    const lastName = document
      .getElementById("signLast")
      .value.trim()
      .toLowerCase();
    const dob = document.getElementById("dob").value.trim();
    const email = document
      .getElementById("signEmail")
      .value.trim()
      .toLowerCase();
    const password = document.getElementById("signPassword").value.trim();
    const passwordVer = document.getElementById("signPasswordVer").value.trim();

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !email ||
      !password ||
      !passwordVer
    ) {
      alert("Please fill in all fields.");
      return;
    }
    //  check for existing user

    if (password !== passwordVer) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userData = { firstName, lastName, dob, email, password };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);

    alert("Data saved successfully!");
  });

  const submit2Button = document.querySelector(".submit2");

  submit2Button.addEventListener("click", (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const enteredName = document
      .getElementById("logName")
      .value.trim()
      .toLowerCase();
    const enteredPassword = document.getElementById("logPassword").value.trim();

    const user = users.find(
      (user) =>
        user.firstName === enteredName && user.password === enteredPassword
    );

    if (user) {
      localStorage.setItem(
        "loggedInUser",
        `${user.firstName} ${user.lastName}`
      );
      window.location.href = "./index.html";
    } else {
      alert("Invalid Name or Password. Please try again.");
    }
  });
});
