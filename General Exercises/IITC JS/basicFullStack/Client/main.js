import { getJokes, deleteJoke, addJoke } from "./dataCenter.js";

const elSetupInput = document.querySelector(".setup");
const elPunchLineInput = document.querySelector(".punchline");

const elCreateBtn = document.querySelector(".create-btn");

const elForm = document.getElementById("add-form");

let jokes = await getJokes();
jokes = jokes.jokes;
console.log(jokes);

const renderJokes = (jokes) => {
  const elJokesContainer = document.querySelector(".jokes-container");
  elJokesContainer.innerHTML = "";
  jokes.forEach((joke) => {
    const jokeElement = document.createElement("ul");
    jokeElement.classList.add("each-joke");
    const jokeSetup = document.createElement("li");
    jokeSetup.textContent = `Punchline: ${joke.punchline}`;
    const jokePunchline = document.createElement("li");
    jokePunchline.textContent = `Setup: ${joke.setup}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    elJokesContainer.appendChild(jokeElement);
    jokeElement.appendChild(jokeSetup);
    jokeElement.appendChild(jokePunchline);
    jokeElement.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", async () => {
      const result = await deleteJoke(joke._id);
      jokes = await getJokes();
      jokes = jokes.jokes;
      console.log(result);
      renderJokes(jokes);
    });
  });
};

renderJokes(jokes);
document.addEventListener("DOMContentLoaded", () => {
  renderJokes();
});

elCreateBtn.addEventListener("click", async () => {
  const setup = elSetupInput.value;
  const punchline = elPunchLineInput.value;
  const data = await addJoke(setup, punchline);
  console.log(data);
  jokes = await getJokes();
  jokes = jokes.jokes;
  renderJokes(jokes);
});
