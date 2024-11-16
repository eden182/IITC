import { createCardFunction } from "./createCard.js";

// Daily Movies
export function displayDailyNowPlayingMovies(movies) {
  createCardFunction(movies, "nowPlayingMoviesContainer2");
}

// Daily TV Shows
export function displayDailyAiringTodayTVShows(tvShows) {
  createCardFunction(tvShows, "airingTodayTVcontainer2");
}

// Weekly Movies
export function displayWeeklyPopularMovies(movies) {
  createCardFunction(movies, "popular-container2");
}

// Weekly TV Shows
export function displayWeeklyPopularTVShows(tvShows) {
  createCardFunction(tvShows, "popularTVcontainer2");
}
