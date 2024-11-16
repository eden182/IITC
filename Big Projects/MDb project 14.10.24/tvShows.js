import { options } from "./data.js";
import { createCardFunction } from "./createCard.js";
// tv shows

export function fetchTVShowDetails(id) {
  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch TV show details");
      return response.json();
    })
    .catch((err) => {
      console.error(`Error fetching details for TV show ID ${id}:`, err);
      return null;
    });
}

export function displayTrendingTVShows(tvShows) {
  createCardFunction(tvShows, "trendingTVcontainer", "tv");
}

export function displayAiringTodayTVShows(tvShows) {
  createCardFunction(tvShows, "airingTodayTVcontainer", "tv");
}

export function displayPopularTVShows(tvShows) {
  createCardFunction(tvShows, "popularTVcontainer", "tv");
}

export function displayTopRatedTVShows(tvShows) {
  createCardFunction(tvShows, "topRatedTVcontainer", "tv");
}
