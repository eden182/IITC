const body = document.body;
const html = document.documentElement;
const colorButton = document.querySelector(".dayMode");
const colorButtonContainer = document.querySelector(".inDayMode");
const moviesButton = document.getElementById("moviesButton");
const tvShowsButton = document.getElementById("tvShowsButton");
const logoButton = document.getElementById("logoButton");
const actorsButton = document.getElementById("actorsButton");
const favButton = document.getElementById("favButton");

const mainConIn = document.querySelector(".mainConIn");
const movieCon = document.querySelector(".movieCon");
const tvCon = document.querySelector(".tvCon");
const dailyCon = document.querySelector(".dailyCon");
const weeklyCon = document.querySelector(".weeklyCon");
const actorsPage = document.querySelector(".actorsPage");
const savedPage = document.querySelector(".savedPage");
const MyFavorites = document.getElementById(".favListText");

let isCustomColors = false;

// toggle filterOpen
document.querySelector(".filter").addEventListener("click", function () {
  const filterOpen = document.querySelector(".filterOpen");
  filterOpen.classList.toggle("active");
});

// Toggle night mode
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

// openProfile
const profile = document.querySelector(".openProfile");
const log = document.getElementById("log");
const sign = document.getElementById("sign");
sign.addEventListener("click", () => {
  window.location.href = "./sign.html";
});

log.addEventListener("click", () => {
  sessionStorage.setItem("showLog", "true");
  window.location.href = "./sign.html";
});

moviesButton.addEventListener("click", () => showMainContent("movies"));
tvShowsButton.addEventListener("click", () => showMainContent("tv"));
actorsButton.addEventListener("click", () => showMainContent("actors"));
favButton.addEventListener("click", () => showMainContent("saved"));
logoButton.addEventListener("click", () => location.reload());

dailyButton.addEventListener("click", () => showDailyWeeklyContent("daily"));
weeklyButton.addEventListener("click", () => showDailyWeeklyContent("weekly"));

// model movies
// Key: 90cd5147dd18f23f58fce05f24ddd67b
const optionsMovies = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGNkNTE0N2RkMThmMjNmNThmY2UwNWYyNGRkZDY3YiIsIm5iZiI6MTcyOTI0MTg0My41NzMzNDIsInN1YiI6IjY3MGQxMTA1ZDVmOTNhM2RhMGJiYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqbO_PC8w1EnwTgds0i-Hbdm1YYXwPevdT4psOkXLRU",
  },
};

function fetchMoviesData(endpoint, displayCallback) {
  fetch(`https://api.themoviedb.org/3/${endpoint}`, optionsMovies)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => displayCallback(data.results))
    .catch((err) => console.error(`Fetch error: ${endpoint}`, err));
}

fetchMoviesData("movie/popular?language=en-US&page=1", displayPopularMovies);
fetchMoviesData("movie/top_rated?language=en-US&page=1", displayTopRatedMovies);
fetchMoviesData("movie/upcoming?language=en-US&page=1", displayUpcomingMovies);
fetchMoviesData(
  "movie/now_playing?language=en-US&page=1",
  displayNowPlayingMovies
);

async function displayMoviesContent(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  for (const item of items) {
    if (item.poster_path) {
      const card = document.createElement("div");
      card.className = "movie-card";

      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
      image.alt = item.title;

      const heartIcon = document.createElement("span");
      heartIcon.className = "heart-icon";
      heartIcon.id = `${item.id}`;
      heartIcon.innerHTML = "&#9825;";
      heartIcon.addEventListener("click", function () {
        heartIcon.classList.toggle("active");
      });

      const details = await fetchMovieDetails(item.id);
      if (details) {
        card.setAttribute("data-title", details.title);
        card.setAttribute(
          "data-genre_id",
          details.genres
            ? details.genres.map((g) => g.name).join(", ")
            : "Unknown"
        );
        card.setAttribute("data-release_date", details.release_date);
      } else {
        console.warn(`No details found for ID: ${item.id}`);
      }

      card.appendChild(image);
      card.appendChild(heartIcon);
      container.appendChild(card);
    }
  }
}

// view movies
function displayPopularMovies(movies) {
  displayMoviesContent(movies, "popular-container");
}

function displayTopRatedMovies(movies) {
  displayMoviesContent(movies, "top-rated-container");
}

function displayUpcomingMovies(movies) {
  displayMoviesContent(movies, "upcoming-container");
}

function displayNowPlayingMovies(movies) {
  displayMoviesContent(movies, "nowPlayingMoviesContainer");
}

function fetchMovieDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  return fetch(url, optionsMovies)
    .then((response) => response.json())
    .catch((err) => {
      console.error(`Error fetching details for movie ID ${id}:`, err);
      return null;
    });
}
//model TV shows
const optionsTVShows = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGNkNTE0N2RkMThmMjNmNThmY2UwNWYyNGRkZDY3YiIsIm5iZiI6MTcyOTI0MTg0My41NzMzNDIsInN1YiI6IjY3MGQxMTA1ZDVmOTNhM2RhMGJiYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqbO_PC8w1EnwTgds0i-Hbdm1YYXwPevdT4psOkXLRU",
  },
};

function fetchTVShowsData(endpoint, displayCallback) {
  fetch(`https://api.themoviedb.org/3/${endpoint}`, optionsTVShows)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => displayCallback(data.results))
    .catch((err) => console.error(`Fetch error: ${endpoint}`, err));
}

fetchTVShowsData("trending/tv/day?language=en-US", displayTrendingTVShows);
fetchTVShowsData(
  "tv/airing_today?language=en-US&page=1",
  displayAiringTodayTVShows
);
fetchTVShowsData("tv/popular?language=en-US&page=1", displayPopularTVShows);
fetchTVShowsData("tv/top_rated?language=en-US&page=1", displayTopRatedTVShows);

// function to display TV show content
async function displayTVShowsContent(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  for (const item of items) {
    if (item.poster_path) {
      const card = document.createElement("div");
      card.className = "movie-card";

      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
      image.alt = item.name;

      const heartIcon = document.createElement("span");
      heartIcon.className = "heart-icon";
      heartIcon.id = `${item.id}`;
      heartIcon.innerHTML = "&#9825;";
      heartIcon.addEventListener("click", function () {
        heartIcon.classList.toggle("active");
      });

      const details = await fetchTVShowDetails(item.id);
      if (details) {
        card.setAttribute("data-title", details.name);
        card.setAttribute(
          "data-genre_id",
          details.genres
            ? details.genres.map((g) => g.name).join(", ")
            : "Unknown"
        );
        card.setAttribute("data-release_date", details.first_air_date);
      } else {
        console.warn(`No details found for ID: ${item.id}`);
      }

      card.appendChild(image);
      card.appendChild(heartIcon);
      container.appendChild(card);
    }
  }
}
// view tv shows
function displayTrendingTVShows(tvShows) {
  displayTVShowsContent(tvShows, "trendingTVcontainer");
}

function displayAiringTodayTVShows(tvShows) {
  displayTVShowsContent(tvShows, "airingTodayTVcontainer");
}

function displayPopularTVShows(tvShows) {
  displayTVShowsContent(tvShows, "popularTVcontainer");
}

function displayTopRatedTVShows(tvShows) {
  displayTVShowsContent(tvShows, "topRatedTVcontainer");
}

function fetchTVShowDetails(id) {
  const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  return fetch(url, optionsTVShows)
    .then((response) => response.json())
    .catch((err) => {
      console.error(`Error fetching details for TV show ID ${id}:`, err);
      return null;
    });
}

// Shabi's favorites data
const shabiFavorites = {
  movies: [533535, 945961, 917496, 519182, 1144962, 573435],
  tvShows: [
    1396, 94605, 246, 37854, 60625, 31911, 60059, 87108, 1429, 85937, 1398,
  ],
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGNkNTE0N2RkMThmMjNmNThmY2UwNWYyNGRkZDY3YiIsIm5iZiI6MTcyOTI0MTg0My41NzMzNDIsInN1YiI6IjY3MGQxMTA1ZDVmOTNhM2RhMGJiYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqbO_PC8w1EnwTgds0i-Hbdm1YYXwPevdT4psOkXLRU",
  },
};

// Fetch
function fetchDetails(id, type) {
  const url =
    type === "movie"
      ? `https://api.themoviedb.org/3/movie/${id}?language=en-US`
      : `https://api.themoviedb.org/3/tv/${id}?language=en-US`;

  return fetch(url, options)
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Network response was not ok for ${type} with ID ${id}`
        );
      return response.json();
    })
    .catch((err) => {
      console.error(`Error fetching details for ${type} with ID ${id}:`, err);
      return null;
    });
}

function createCard(details, type) {
  const card = document.createElement("div");
  card.className = "favCard";
  const title = type === "movie" ? details.title : details.name;
  const releaseDate =
    type === "movie" ? details.release_date : details.first_air_date;

  card.setAttribute("data-title", title);
  if (details.genres) {
    card.setAttribute(
      "data-genre_id",
      details.genres.map((g) => g.name).join(", ")
    );
  }
  card.setAttribute("data-release_date", releaseDate);

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
  img.alt = title;

  card.appendChild(img);
  return card;
}

// Display favorite movies
async function displayFavoriteMovies(container) {
  for (const movieId of shabiFavorites.movies) {
    const details = await fetchDetails(movieId, "movie");
    if (details) {
      const movieCard = createCard(details, "movie");
      container.appendChild(movieCard);
    } else {
      console.warn(`No details found for movie ID: ${movieId}`);
    }
  }
}

// Display favorite TV shows
async function displayFavoriteTVShows(container) {
  for (const showId of shabiFavorites.tvShows) {
    const details = await fetchDetails(showId, "tv");
    if (details) {
      const tvCard = createCard(details, "tv");
      container.appendChild(tvCard);
    } else {
      console.warn(`No details found for TV show ID: ${showId}`);
    }
  }
}

// Main function to display all
async function displayShabiFavorites() {
  const favContainer = document.getElementById("ShabiFav");
  favContainer.innerHTML = "";
  await displayFavoriteMovies(favContainer);
  await displayFavoriteTVShows(favContainer);
}

function fetchDataAndDisplayFavorites() {
  displayShabiFavorites();
}

fetchDataAndDisplayFavorites();

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

// Daily Movies
function displayDailyNowPlayingMovies(movies) {
  displayMoviesContent(movies, "nowPlayingMoviesContainer2");
}

// Daily TV Shows
function displayDailyAiringTodayTVShows(tvShows) {
  displayTVShowsContent(tvShows, "airingTodayTVcontainer2");
}

// Weekly Movies
function displayWeeklyPopularMovies(movies) {
  displayMoviesContent(movies, "popular-container2");
}

// Weekly TV Shows
function displayWeeklyPopularTVShows(tvShows) {
  displayTVShowsContent(tvShows, "popularTVcontainer2");
}

const container = document.getElementById("ShabiFav");

container.addEventListener("click", function (event) {
  if (event.target.classList.contains("heart-icon")) {
    event.target.classList.toggle("active");
  }
});

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
  const profileCircle = document.getElementById("profileCircle");
  const letter = document.getElementById("letter");
  const userName = document.getElementById("userName");
  const loggedInUser = localStorage.getItem("loggedInUser");

  console.log("Profile Circle Element:", profileCircle);
  console.log("User Name Element:", userName);

  if (loggedInUser) {
    const firstName = loggedInUser.split(" ")[0];
    letter.textContent = firstName.charAt(0);
    userName.textContent = `Welcome, ${firstName}`;
  } else {
    letter.textContent = "G";
    userName.textContent = "Guest";
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
const searchInput = document.querySelector(".search");
const searchPanel = document.querySelector(".searchPanel");

searchInput.addEventListener("keyup", async function (event) {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value.trim().toLowerCase();
    searchPanel.innerHTML = "";
    searchPanel.style.display = "flex";

    const searchResults = await fetchSearchData(searchTerm);

    if (searchResults.length > 0) {
      for (const movie of searchResults) {
        if (movie.poster_path) {
          const resultCard = document.createElement("div");
          resultCard.className = "movie-card";

          const image = document.createElement("img");
          image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          image.alt = movie.title;

          const infoOverlay = document.createElement("div");
          infoOverlay.className = "info-overlay";

          const title = document.createElement("h3");
          title.className = "movie-title";
          title.textContent = movie.title;

          const releaseDate = document.createElement("p");
          releaseDate.className = "release-date";
          releaseDate.textContent = `Release Date: ${movie.release_date}`;

          const actors = await getMovieCast(movie.id);
          const actorsList = document.createElement("p");
          actorsList.className = "actors-list";
          actorsList.textContent = `Actors: ${actors.join(", ")}`;

          infoOverlay.appendChild(title);
          infoOverlay.appendChild(releaseDate);
          infoOverlay.appendChild(actorsList);

          resultCard.appendChild(image);
          resultCard.appendChild(infoOverlay);

          resultCard.addEventListener("click", () => {
            showMovieDetails(movie.id);
          });

          searchPanel.appendChild(resultCard);
        }
      }
    } else {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.textContent = "No results found";
      searchPanel.appendChild(noResults);
    }
  }

  if (searchInput.value === "") {
    searchPanel.style.display = "none";
  }
});

async function fetchSearchData(searchTerm) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US`,
    optionsMovies
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.results || [];
}

async function getMovieCast(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    optionsMovies
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.cast.slice(0, 3).map((actor) => actor.name);
}
