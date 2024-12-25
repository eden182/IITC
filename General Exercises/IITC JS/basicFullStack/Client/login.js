import { getUsers } from "./dataCenter.js";
const serverAddress = "http://localhost:3000";

const logButton = document.getElementById("logButton");
const signButton = document.getElementById("signButton");
const changeButton = document.querySelector(".changeButton");
const logCon = document.getElementById("logCon");
const signCon = document.getElementById("signCon");
const hl2 = document.getElementById("hl2");
const hl1 = document.getElementById("hl1");
const changePage = document.querySelector(".changePage");

signCon.style.display = "flex";
logCon.style.display = "none";
hl1.style.display = "flex";
hl2.style.display = "none";

// changes the page
document.addEventListener("DOMContentLoaded", () => {
  changeButton.addEventListener("click", () => {
    if (signCon.style.display === "flex") {
      hl2.style.display = "flex";
      logCon.style.display = "flex";
      hl1.style.display = "none";
      signCon.style.display = "none";
      changePage.innerHTML = `If you're not signed yet click`;
    } else if (signCon.style.display === "none") {
      hl2.style.display = "none";
      logCon.style.display = "none";
      hl1.style.display = "flex";
      signCon.style.display = "flex";
      changePage.innerHTML = `If you already have a user click`;
    }
  });
});

signButton.addEventListener("click", () => {
  // Collect form data
  const username = document.getElementById("userNameInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();
  const passwordVer = document.getElementById("passwordVerInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();

  if (!username || !email || !password || !passwordVer) {
    alert("Please fill in all fields.");
    return;
  }
  // Check if passwords match
  if (password !== passwordVer) {
    alert("Passwords do not match!");
    return;
  }

  // Prepare data to send in POST request
  const user = {
    username: username,
    password: password,
    email: email,
  };
  console.log(user);

  postUserData(user);
  //   clear all fields
  document.getElementById("userNameInput").value = "";
  document.getElementById("passwordInput").value = "";
  document.getElementById("passwordVerInput").value = "";
  document.getElementById("emailInput").value = "";
});

// password showing
document.addEventListener("DOMContentLoaded", () => {
  const passwordIn = document.getElementById("passwordInput");
  const passwordIn2 = document.getElementById("passwordInput2");
  const passwordInVer = document.getElementById("passwordVerInput");

  const eye1 = document.getElementById("eye1");
  const eye2 = document.getElementById("eye2");
  const eye3 = document.getElementById("eye3");

  function togglePasswordVisibility1() {
    if (passwordIn) {
      passwordIn.type = passwordIn.type === "password" ? "text" : "password";
      console.log("Toggling visibility for passwordInput");
    }
  }

  function togglePasswordVisibility2() {
    if (passwordIn2) {
      passwordIn2.type = passwordIn2.type === "password" ? "text" : "password";
      console.log("Toggling visibility for passwordInput2");
    }
  }

  function togglePasswordVisibility3() {
    if (passwordInVer) {
      passwordInVer.type =
        passwordInVer.type === "password" ? "text" : "password";
      console.log("Toggling visibility for passwordVerInput");
    }
  }

  // Add event listeners
  if (eye1) eye1.addEventListener("click", togglePasswordVisibility1);
  if (eye2) eye2.addEventListener("click", togglePasswordVisibility3);
  if (eye3) eye3.addEventListener("click", togglePasswordVisibility2);
});

const data = await getUsers();
console.log(data);

const postUserData = async function (user) {
  try {
    const body = {
      user: user,
    };

    const result = await axios.post(`${serverAddress}/api/users/single`, body);

    return result;
  } catch (error) {
    console.log("from the data center:", error);
  }
};
