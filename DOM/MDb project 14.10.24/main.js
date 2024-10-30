// imports
import { fetchMoviesData, fetchTVShowsData, options } from "./data.js";

import {
  displayPopularMovies,
  displayTopRatedMovies,
  displayUpcomingMovies,
  displayNowPlayingMovies,
} from "./movies.js";

import {
  displayTrendingTVShows,
  displayAiringTodayTVShows,
  displayPopularTVShows,
  displayTopRatedTVShows,
} from "./tvShows.js";

import { displayShabiFavorites } from "./shabi's.js";

import { setupSearch } from "./search.js";

import {
  displayDailyNowPlayingMovies,
  displayDailyAiringTodayTVShows,
  displayWeeklyPopularMovies,
  displayWeeklyPopularTVShows,
} from "./daily.js";

// const list
const body = document.body;
const html = document.documentElement;
const colorButton = document.querySelector(".dayMode");
const colorButtonContainer = document.querySelector(".inDayMode");
const moviesButton = document.getElementById("moviesButton");
const tvShowsButton = document.getElementById("tvShowsButton");
const logoButton = document.getElementById("logoButton");
const actorsButton = document.getElementById("actorsButton");
const favButton = document.getElementById("favButton");
const filterButton = document.querySelector(".filter");
const filterOpen = document.querySelector(".filterOpen");
const mainConIn = document.querySelector(".mainConIn");
const movieCon = document.querySelector(".movieCon");
const tvCon = document.querySelector(".tvCon");
const dailyCon = document.querySelector(".dailyCon");
const weeklyCon = document.querySelector(".weeklyCon");
const actorsPage = document.querySelector(".actorsPage");
const savedPage = document.querySelector(".savedPage");

// toggle filterOpen
function filterToggle() {
  filterButton.addEventListener("mouseenter", function () {
    filterOpen.style.display = "flex";
  });
  filterOpen.addEventListener("mouseenter", function () {
    filterOpen.style.display = "flex";
  });
  filterOpen.addEventListener("mouseleave", function () {
    filterOpen.style.display = "none";
  });
}
filterButton.addEventListener("mouseleave", function () {
  filterOpen.style.display = "none";
});
filterToggle();

// Toggle night mode
let isCustomColors = false;
colorButton.addEventListener("click", () => {
  isCustomColors = !isCustomColors;
  body.classList.toggle("custom-colors-active", isCustomColors);
  html.classList.toggle("custom-colors-active");
  colorButtonContainer.style.justifyContent = isCustomColors
    ? "flex-start"
    : "flex-end";
  colorButton.textContent = isCustomColors ? "Day" : "Night";
  colorButton.classList.toggle("button-active", isCustomColors);
});

// Menu + filter pages show
function showMainContent(contentToShow) {
  movieCon.style.display = "none";
  tvCon.style.display = "none";
  mainConIn.style.display = "none";
  dailyCon.style.display = "none";
  weeklyCon.style.display = "none";
  actorsPage.style.display = "none";
  savedPage.style.display = "none";

  if (contentToShow === "movies") {
    movieCon.style.display = "flex";
  } else if (contentToShow === "tv") {
    tvCon.style.display = "flex";
  } else if (contentToShow === "main") {
    mainConIn.style.display = "flex";
  } else if (contentToShow === "actors") {
    actorsPage.style.display = "flex";
  } else if (contentToShow === "saved") {
    savedPage.style.display = "flex";
  }
}

function showDailyWeeklyContent(contentToShow) {
  dailyCon.style.display = "none";
  weeklyCon.style.display = "none";

  if (contentToShow === "daily") {
    dailyCon.style.display = "flex";
  } else if (contentToShow === "weekly") {
    weeklyCon.style.display = "flex";
  }
}

moviesButton.addEventListener("click", () => showMainContent("movies"));
tvShowsButton.addEventListener("click", () => showMainContent("tv"));
actorsButton.addEventListener("click", () => showMainContent("actors"));
favButton.addEventListener("click", () => showMainContent("saved"));
logoButton.addEventListener("click", () => location.reload());

dailyButton.addEventListener("click", () => showDailyWeeklyContent("daily"));
weeklyButton.addEventListener("click", () => showDailyWeeklyContent("weekly"));

// display movies
fetchMoviesData("movie/popular?language=en-US&page=1", displayPopularMovies);
fetchMoviesData("movie/top_rated?language=en-US&page=1", displayTopRatedMovies);
fetchMoviesData("movie/upcoming?language=en-US&page=1", displayUpcomingMovies);
fetchMoviesData(
  "movie/now_playing?language=en-US&page=1",
  displayNowPlayingMovies
);

//display TV shows
fetchTVShowsData("trending/tv/day?language=en-US", displayTrendingTVShows);
fetchTVShowsData(
  "tv/airing_today?language=en-US&page=1",
  displayAiringTodayTVShows
);
fetchTVShowsData("tv/popular?language=en-US&page=1", displayPopularTVShows);
fetchTVShowsData("tv/top_rated?language=en-US&page=1", displayTopRatedTVShows);

// display my list
displayShabiFavorites();

// Fetching daily and weekly data
fetchMoviesData(
  "movie/now_playing?language=en-US&page=1",
  displayDailyNowPlayingMovies
);
fetchTVShowsData(
  "tv/airing_today?language=en-US&page=1",
  displayDailyAiringTodayTVShows
);
fetchMoviesData(
  "movie/popular?language=en-US&page=1",
  displayWeeklyPopularMovies
);
fetchTVShowsData(
  "tv/popular?language=en-US&page=1",
  displayWeeklyPopularTVShows
);
console.log(document.getElementById("nowPlayingMoviesContainer2"));

// actors
const fetchPeople = async (type) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGNkNTE0N2RkMThmMjNmNThmY2UwNWYyNGRkZDY3YiIsIm5iZiI6MTcyOTI0MTg0My41NzMzNDIsInN1YiI6IjY3MGQxMTA1ZDVmOTNhM2RhMGJiYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqbO_PC8w1EnwTgds0i-Hbdm1YYXwPevdT4psOkXLRU",
    },
  };

  let url = "";
  if (type === "popular") {
    url = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";
  } else if (type === "trending") {
    url = "https://api.themoviedb.org/3/trending/person/day?language=en-US";
  } else {
    console.error("Invalid type provided.");
    return;
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${type} people:`, error);
  }
};

function displayActors(actors, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (!actors || actors.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No actors found.";
    container.appendChild(message);
    return;
  }

  actors.forEach((actor) => {
    if (actor.profile_path) {
      const actorCard = document.createElement("div");
      actorCard.className = "actorCard";

      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
      image.alt = actor.name;

      const name = document.createElement("p");
      name.textContent = actor.name;

      actorCard.appendChild(image);
      actorCard.appendChild(name);
      container.appendChild(actorCard);
    }
  });
}

fetchPeople("popular").then((data) => {
  if (data) {
    displayActors(data.results, "popularActors");
  }
});

fetchPeople("trending").then((data) => {
  if (data) {
    displayActors(data.results, "trendingActors");
  }
});

fetchPeople("trending").then((data) => {
  if (data) {
    displayActors(data.results, "trendingActors2");
  }
});

// email sending
document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("messageInput");

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});

function sendMessage() {
  const messageContent = document.getElementById("messageInput").value;
  const emailAddress = "shabisons98765@gmail.com";
  const subject = "Message from Contact Form";

  if (messageContent.trim()) {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(messageContent)}`;
  } else {
    alert("Please enter a message before sending.");
  }
}

// Profile update function
function updateProfile() {
  const letter = document.getElementById("letter");
  const userName = document.getElementById("userName");
  const loggedInUser = localStorage.getItem("loggedInUser");

  console.log("User Name Element:", userName);

  if (loggedInUser) {
    const firstName = loggedInUser.split(" ")[0];
    letter.textContent = firstName.charAt(0).toUpperCase();
    userName.textContent = `Welcome, ${firstName}`;
  } else {
    letter.textContent = "G";
    userName.textContent = "Welcome, Guest";
    console.log("No user is logged in, showing guest.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");

  console.log("Checking localStorage in index.html:", {
    firstName: localStorage.getItem("firstName"),
    loggedInUser,
  });
  updateProfile();
});

// openProfile
const log = document.getElementById("log");
const sign = document.getElementById("sign");
sign.addEventListener("click", () => {
  window.location.href = "./sign.html";
});

log.addEventListener("click", () => {
  sessionStorage.setItem("showLog", "true");
  window.location.href = "./sign.html";
});

// Log out function
function logout() {
  localStorage.removeItem("loggedInUser");
  const letter = document.getElementById("letter");
  const userName = document.getElementById("userName");

  letter.textContent = "G";
  userName.textContent = "Guest";

  console.log("User logged out successfully.");
}

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logOut");

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      logout();
      window.location.href = "./index.html";
    });
  }
});

// search panel
setupSearch();
