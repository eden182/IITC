// create card
import { fetchMovieDetails } from "./movies.js";
import { fetchTVShowDetails } from "./tvShows.js";

import {
  addFavoriteMovieToList,
  removeFavMovie,
  displayFavorites,
} from "./favorites.js";

export async function createCardFunction(items, containerId, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  for (const item of items) {
    if (item.poster_path) {
      const card = document.createElement("div");
      card.className = "movie-card";

      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
      image.alt = item.title || item.name;

      const heartIcon = document.createElement("span");
      heartIcon.className = "heart-icon";
      heartIcon.dataset.movieId = item.id;
      heartIcon.innerHTML = "&#9825;";
      heartIcon.addEventListener("click", function () {
        heartIcon.classList.toggle("active");
      });

      const details =
        type === "movie"
          ? await fetchMovieDetails(item.id)
          : await fetchTVShowDetails(item.id);

      if (details) {
        card.setAttribute("data-title", details.title || details.name);
        card.setAttribute(
          "data-genre_id",
          details.genres
            ? details.genres.map((g) => g.name).join(", ")
            : "Unknown"
        );
        card.setAttribute(
          "data-release_date",
          details.release_date || details.first_air_date
        );
      } else {
        console.warn(`No details found for ID: ${item.id}`);
      }

      card.appendChild(image);
      card.appendChild(heartIcon);
      container.appendChild(card);

      heartIcon.addEventListener("click", async (event) => {
        const movieCardId = event.target.dataset.movieId;
        const isFavorite = heartIcon.classList.contains("favorite");

        if (isFavorite) {
          await removeFavMovie(movieCardId);
          heartIcon.classList.remove("favorite");
        } else {
          await addFavoriteMovieToList(movieCardId);
          heartIcon.classList.add("favorite");
        }
        await displayFavorites();
      });
    }
  }
}
