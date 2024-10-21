const body = document.body;
const html = document.documentElement;
const colorButton = document.querySelector(".dayMode");
const colorButtonContainer = document.querySelector(".inDayMode");
const moviesButton = document.getElementById("moviesButton");
const tvShowsButton = document.getElementById("tvShowsButton");
const logoButton = document.getElementById("logoButton");

const mainCon = document.querySelector(".mainCon");
const movieCon = document.querySelector(".movieCon");
const tvCon = document.querySelector(".tvCon");
const dailyCon = document.querySelector(".dailyCon");
const weeklyCon = document.querySelector(".weeklyCon");
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
  mainCon.style.display = "none";
  dailyCon.style.display = "none";
  weeklyCon.style.display = "none";

  if (contentToShow === "movies") {
    movieCon.style.display = "flex";
  } else if (contentToShow === "tv") {
    tvCon.style.display = "flex";
  } else if (contentToShow === "main") {
    mainCon.style.display = "flex";
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

  const heartIcon = document.createElement("span");
  heartIcon.className = "heart-icon";
  heartIcon.innerHTML = "&#9825;";

  card.appendChild(img);
  card.appendChild(heartIcon);
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
