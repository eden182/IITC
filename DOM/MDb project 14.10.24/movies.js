// Key: 90cd5147dd18f23f58fce05f24ddd67b
import { options } from "./data.js";
import { createCardFunction } from "./createCard.js";
// movies.js

export function fetchMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch movie details");
      return response.json();
    })
    .catch((err) => {
      console.error(`Error fetching details for movie ID ${id}:`, err);
      return null;
    });
}

export function displayPopularMovies(movies) {
  createCardFunction(movies, "popular-container");
}

export function displayTopRatedMovies(movies) {
  createCardFunction(movies, "top-rated-container");
}

export function displayUpcomingMovies(movies) {
  createCardFunction(movies, "upcoming-container", "movie");
}

export function displayNowPlayingMovies(movies) {
  createCardFunction(movies, "nowPlayingMoviesContainer", "movie");
}
