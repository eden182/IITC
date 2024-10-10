let content = document.getElementsByClassName("content")[0];
let content_2 = document.getElementsByClassName("content2")[0];
let continueButton = document.getElementsByClassName("butC")[0];
let passwordIn = document.getElementsByClassName("pass")[0];
let nameDisplay = document.getElementById("name");
let exitButton = document.getElementById("exit");
let balanceButton = document.getElementById("balance");
let balanceDisplay = document.getElementById("balanceDisplay");
let count = document.getElementById("count");
let clock = document.getElementById("clock");
let depositButton = document.getElementById("deposit");
let withdrawButton = document.getElementById("withdraw");
let depositInput = document.createElement("input");
let confirmDepositButton = document.createElement("button");
confirmDepositButton.className = "confirmDepositButton";
let withdrawInput = document.createElement("input");
let confirmWithdrawButton = document.createElement("button");
confirmWithdrawButton.className = "confirmWithdrawButton";

const customersList = [
  {
    firstName: "John",
    password: 1234,
    balance: 500,
  },
  {
    firstName: "Eden",
    password: 1620,
    balance: 500,
  },
  {
    firstName: "Alice",
    password: 4321,
    balance: 500,
  },
  {
    firstName: "Luffy",
    password: 6996,
    balance: 500,
  },
];

if (!localStorage.getItem("customers")) {
  localStorage.setItem("customers", JSON.stringify(customersList));
}
let customers = JSON.parse(localStorage.getItem("customers"));

let failedAttempts = 0;
let isLocked = false;
let foundCustomer = null;

function continueFun() {
  if (isLocked) return;

  let enteredPassword = passwordIn.value.trim();
  foundCustomer = customers.find(
    (customer) => customer.password == enteredPassword
  );

  if (foundCustomer) {
    nameDisplay.textContent = foundCustomer.firstName;
    content.style.display = "none";
    content_2.style.display = "flex";
    failedAttempts = 0;
  } else {
    failedAttempts++;
    if (failedAttempts >= 3) {
      isLocked = true;
      alert(
        "Too many wrong attempts! Please wait 10 seconds before trying again."
      );
      continueButton.disabled = true;
      count.textContent = "10";
      timer();
    } else {
      alert(`Incorrect password. ${3 - failedAttempts} attempts remaining.`);
    }
  }
}

continueButton.addEventListener("click", continueFun);

passwordIn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    continueFun();
  }
});

balanceButton.addEventListener("click", function () {
  if (foundCustomer) {
    if (balanceDisplay.style.display === "block") {
      balanceDisplay.style.display = "none";
    } else {
      balanceDisplay.style.display = "block";
      balanceDisplay.textContent = `Your balance is $${foundCustomer.balance}`;
      if (foundCustomer.balance === null) {
        balanceDisplay.textContent = `Your balance is 0`;
      }
    }
  }
});

exitButton.addEventListener("click", function () {
  content_2.style.display = "none";
  content.style.display = "flex";
  passwordIn.value = "";
  balanceDisplay.style.display = "none";
  depositInput.style.display = "none";
  withdrawInput.style.display = "none";
  confirmDepositButton.style.display = "none";
  confirmWithdrawButton.style.display = "none";
});

function timer() {
  let countdown = parseInt(count.textContent);
  clock.style.display = "flex";

  let countdownInterval = setInterval(function () {
    countdown--;
    count.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      clock.style.display = "none";
      continueButton.disabled = false;
      isLocked = false;
    }
  }, 1000);
}

let depositActive = false;

depositButton.addEventListener("click", function () {
  if (foundCustomer) {
    if (!depositActive) {
      depositInput.placeholder = "Enter deposit amount";
      depositInput.type = "number";
      depositInput.style.display = "block";
      confirmDepositButton.textContent = "Confirm Deposit";
      confirmDepositButton.style.display = "block";

      content_2.appendChild(depositInput);
      content_2.appendChild(confirmDepositButton);

      confirmDepositButton.onclick = function () {
        let depositAmount = parseFloat(depositInput.value);

        foundCustomer.balance += depositAmount;
        localStorage.setItem("customers", JSON.stringify(customers));
        alert(`Successfully deposited $${depositAmount}.`);

        depositInput.value = "";
        depositInput.style.display = "none";
        confirmDepositButton.style.display = "none";
        depositActive = false;
      };

      depositActive = true;
    } else {
      depositInput.style.display = "none";
      confirmDepositButton.style.display = "none";
      depositActive = false;
    }
  }
});

let withdrawActive = false;

withdrawButton.addEventListener("click", function () {
  if (foundCustomer) {
    if (!withdrawActive) {
      withdrawInput.placeholder = "Enter withdrawal amount";
      withdrawInput.type = "number";
      withdrawInput.style.display = "block";
      confirmWithdrawButton.textContent = "Confirm Withdraw";
      confirmWithdrawButton.style.display = "block";

      content_2.appendChild(withdrawInput);
      content_2.appendChild(confirmWithdrawButton);

      confirmWithdrawButton.onclick = function () {
        let withdrawAmount = parseFloat(withdrawInput.value);

        foundCustomer.balance -= withdrawAmount;
        localStorage.setItem("customers", JSON.stringify(customers));
        alert(`Successfully withdrew $${withdrawAmount}.`);

        withdrawInput.value = "";
        withdrawInput.style.display = "none";
        confirmWithdrawButton.style.display = "none";
        withdrawActive = false;
      };

      withdrawActive = true;
    } else {
      withdrawInput.style.display = "none";
      confirmWithdrawButton.style.display = "none";
      withdrawActive = false;
    }
  }
});
