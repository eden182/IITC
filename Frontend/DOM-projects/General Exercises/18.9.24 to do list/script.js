document.addEventListener("DOMContentLoaded", function () {
  const inputToday = document.getElementById("ToDo1Input");
  const listToday = document.getElementById("toDo1").querySelector("ul");
  const countToday = document.querySelector("#toDo1 .count");
  const toggleToday = document.querySelector("#toDo1 .toggle-btn");

  const inputWeek = document.getElementById("ToDo2Input");
  const listWeek = document.getElementById("toDo2").querySelector("ul");
  const countWeek = document.querySelector("#toDo2 .count");
  const toggleWeek = document.querySelector("#toDo2 .toggle-btn");

  function updateCount(list, countElement) {
    const completedItems = Array.from(list.children).filter((li) =>
      li.classList.contains("completed")
    );
    countElement.textContent = `Completed: ${completedItems.length}`;
  }

  function addItem(input, list, countElement) {
    const itemText = input.value.trim();
    if (itemText) {
      const li = document.createElement("li");
      li.innerHTML = `
                <span class="todo-text">${itemText}</span>
                <button class="remove">X</button>
            `;

      li.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateCount(list, countElement);
      });

      const removeButton = li.querySelector(".remove");
      removeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        list.removeChild(li);
        updateCount(list, countElement);
      });

      list.appendChild(li);
      input.value = "";
      updateCount(list, countElement);
    }
  }

  inputToday.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addItem(inputToday, listToday, countToday);
    }
  });

  inputWeek.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addItem(inputWeek, listWeek, countWeek);
    }
  });

  toggleToday.addEventListener("click", function () {
    listToday.classList.toggle("hidden");
    toggleToday.textContent = listToday.classList.contains("hidden")
      ? "Show List"
      : "Hide List";
  });

  toggleWeek.addEventListener("click", function () {
    listWeek.classList.toggle("hidden");
    toggleWeek.textContent = listWeek.classList.contains("hidden")
      ? "Show List"
      : "Hide List";
  });
});
