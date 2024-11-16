import { createCardFunction } from "./createCard.js";
import { options } from "./data.js";

const searchInput = document.querySelector(".search");
const searchPanel = document.querySelector(".searchPanel");

export function setupSearch() {
  searchInput.addEventListener("keyup", async function (event) {
    if (event.key === "Enter") {
      const searchTerm = searchInput.value.trim();
      searchPanel.innerHTML = "";
      searchPanel.style.display = "flex";

      let searchResults;
      if (!isNaN(searchTerm) && searchTerm !== "") {
        searchResults = await fetchMovieById(searchTerm);
        if (searchResults) {
          createCardFunction([searchResults], "searchPanel", "movie");
        } else {
          displayNoResults("No results found for the ID.");
        }
      } else {
        searchResults = await fetchSearchData(searchTerm);
        if (searchResults.length > 0) {
          createCardFunction(searchResults, "searchPanel", "movie");
        } else {
          displayNoResults("No results found for the name.");
        }
      }
    }

    if (searchInput.value === "") {
      searchPanel.style.display = "none";
    }
  });
}

async function fetchSearchData(searchTerm) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US`,
    options
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.results || [];
}

async function fetchMovieById(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );

  if (!response.ok) {
    return null; // Return null if not found
  }

  const data = await response.json();
  return data; // Return movie details if found
}

// Function to display no results
function displayNoResults(message) {
  const noResults = document.createElement("div");
  noResults.className = "no-results";
  noResults.textContent = message;
  searchPanel.appendChild(noResults);
}
