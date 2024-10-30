import { createCardFunction } from "./createCard.js";

const accountId = "21570812";
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGNkNTE0N2RkMThmMjNmNThmY2UwNWYyNGRkZDY3YiIsIm5iZiI6MTczMDI2OTY1MC45MDE1MDEsInN1YiI6IjY3MGQxMTA1ZDVmOTNhM2RhMGJiYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KnB5qEiENo-jKt1OZKLWsnxBRc5Kq0-0XzgRrjrL2T8";

// Function to post data to the API
async function postData(url, data) {
  const options = {
    method: "POST",
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
}

// Function to add a movie to favorites
export const addFavoriteMovieToList = async (movieCardId) => {
  const favMovie = {
    media_type: "movie",
    media_id: movieCardId,
    favorite: true,
  };

  console.log("Adding to favorites:", favMovie); // Log what you're sending

  try {
    const data = await postData(
      `https://api.themoviedb.org/3/account/${accountId}/favorite`,
      favMovie
    );
    console.log("Movie added to favorites:", data);
    if (!data) {
      console.error("Failed to add favorite");
      return; // Exit the function if adding fails
    }
  } catch (error) {
    console.error("Error adding movie to favorite list:", error);
  }
};

// Function to remove a movie from favorites
export const removeFavMovie = async (movieCardId) => {
  const favMovie = {
    media_type: "movie",
    media_id: movieCardId,
    favorite: false,
  };

  try {
    const data = await postData(
      `https://api.themoviedb.org/3/account/${accountId}/favorite`,
      favMovie
    );
    console.log("Movie removed from favorites:", data);
    if (!data) {
      console.error("Failed to remove favorite");
      return; // Exit the function if removing fails
    }
  } catch (error) {
    console.error("Error removing movie from favorite list:", error);
  }
};

// Toggle favorite state on heart icon click
export function toggleFav() {
  const savedListContainer = document.getElementById("savedList");

  if (savedListContainer) {
    savedListContainer.addEventListener("click", async (event) => {
      const icon = event.target.closest(".heart-icon");
      if (icon) {
        const movieCardId = icon.id; // Get the ID of the heart icon
        console.log("Heart icon clicked with ID:", movieCardId); // Log the clicked ID
        const isFavorite = icon.classList.contains("favorite");

        if (isFavorite) {
          await removeFavMovie(movieCardId);
          icon.classList.remove("favorite");
        } else {
          await addFavoriteMovieToList(movieCardId);
          icon.classList.add("favorite");
        }
        // Update the favorites list
        displayFavorites();
      }
    });
  }
}

// Function to display favorites in the #savedList
export async function displayFavorites() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`,
      {
        method: "GET",
        headers: {
          Authorization: apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch favorites");

    const data = await response.json();
    console.log("Fetched favorite movies:", data.results);
    createCardFunction(data.results, "savedList", "movie");
  } catch (error) {
    console.error("Error displaying favorites:", error);
  }
}
