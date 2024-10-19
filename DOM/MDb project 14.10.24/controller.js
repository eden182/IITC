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

// Menu show
function showContent(contentToShow) {
  movieCon.style.display = "none";
  tvCon.style.display = "none";
  mainCon.style.display = "none";

  if (contentToShow === "movies") {
    movieCon.style.display = "flex";
  } else if (contentToShow === "tv") {
    tvCon.style.display = "flex";
  } else if (contentToShow === "main") {
    mainCon.style.display = "flex";
  }
}

moviesButton.addEventListener("click", () => showContent("movies"));
tvShowsButton.addEventListener("click", () => showContent("tv"));
logoButton.addEventListener("click", () => showContent("main"));

// Model
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGNkNTE0N2RkMThmMjNmNThmY2UwNWYyNGRkZDY3YiIsIm5iZiI6MTcyOTI0MTg0My41NzMzNDIsInN1YiI6IjY3MGQxMTA1ZDVmOTNhM2RhMGJiYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqbO_PC8w1EnwTgds0i-Hbdm1YYXwPevdT4psOkXLRU",
  },
};

// Fetching Popular Movies
function fetchPopularMovies() {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      displayPopularMovies(data.results);
    })
    .catch((err) => console.error("Popular Movies Fetch Error: ", err));
}

// Fetching Trending TV Shows
function fetchTrendingTVShows() {
  fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", options)
    .then((response) => response.json())
    .then((data) => {
      displayTVShows(data.results);
    })
    .catch((err) => console.error("Trending TV Shows Fetch Error: ", err));
}

// Fetching Top Rated Movies
function fetchTopRatedMovies() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      displayTopRatedMovies(data.results);
    })
    .catch((err) => console.error("Top Rated Movies Fetch Error: ", err));
}

// Fetching Upcoming Movies
function fetchUpcomingMovies() {
  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      displayUpcomingMovies(data.results);
    })
    .catch((err) => console.error("Upcoming Movies Fetch Error: ", err));
}

// Fetching Airing Today TV Shows
function fetchAiringTodayTVShows() {
  fetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      displayAiringTodayTVShows(data.results);
    })
    .catch((err) => console.error("Airing Today TV Shows Fetch Error: ", err));
}

// Fetching Popular TV Shows
function fetchPopularTVShows() {
  fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      displayPopularTVShows(data.results);
    })
    .catch((err) => console.error("Popular TV Shows Fetch Error: ", err));
}

// Fetching Top Rated TV Shows
function fetchTopRatedTVShows() {
  fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      displayTopRatedTVShows(data.results);
    })
    .catch((err) => console.error("Top Rated TV Shows Fetch Error: ", err));
}

// Fetching Now Playing Movies
function fetchNowPlayingMovies() {
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      displayNowPlayingMovies(data.results);
    })
    .catch((err) => console.error("Now Playing Movies Fetch Error: ", err));
}

// View
function displayPopularMovies(movies) {
  console.log(movies);

  displayContent(movies, "popular-container");
}

function displayNowPlayingMovies(movies) {
  displayContent(movies, "nowPlayingMoviesContainer");
}

function displayTopRatedMovies(movies) {
  displayContent(movies, "top-rated-container");
}

function displayUpcomingMovies(movies) {
  displayContent(movies, "upcoming-container");
}

function displayAiringTodayTVShows(tvShows) {
  displayContent(tvShows, "airingTodayTVcontainer");
}

function displayPopularTVShows(tvShows) {
  displayContent(tvShows, "popularTVcontainer");
}

function displayTopRatedTVShows(tvShows) {
  console.log(tvShows);

  displayContent(tvShows, "topRatedTVcontainer");
}

function displayTVShows(tvShows) {
  displayContent(tvShows, "trendingTVcontainer");
}

// Helper function to display content
function displayContent(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  items.forEach((item) => {
    if (item.poster_path) {
      const card = document.createElement("div");
      card.className = "movie-card";

      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
      image.alt = item.title || item.name;

      card.appendChild(image);
      container.appendChild(card);
    } else {
      console.log(`No poster found for ${item.title || item.name}`);
    }
  });
}

// Initial Fetch Calls
fetchPopularMovies();
fetchTrendingTVShows();
fetchTopRatedMovies();
fetchUpcomingMovies();
fetchAiringTodayTVShows();
fetchPopularTVShows();
fetchTopRatedTVShows();
fetchNowPlayingMovies();

// Shabi's favorites
// Display Shabi's Favorites
const shabiFavorites = {
  movies: [533535, 945961, 917496, 519182, 1144962, 573435],
  tvShows: [
    1396, 94605, 246, 37854, 60625, 31911, 60059, 87108, 1429, 85937, 1398,
  ],
};

function displayShabiFavorites(movies, tvShows) {
  const favContainer = document.getElementById("ShabiFav");
  favContainer.innerHTML = "";

  // Filter Movies
  const favMovies = movies.filter((movie) =>
    shabiFavorites.movies.includes(movie.id)
  );
  favMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "fav-card";

    const movieImage = document.createElement("img");
    movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieImage.alt = movie.title;

    movieCard.appendChild(movieImage);
    favContainer.appendChild(movieCard);
  });

  // Filter TV Shows
  const favTVShows = tvShows.filter((show) =>
    shabiFavorites.tvShows.includes(show.id)
  );
  favTVShows.forEach((show) => {
    const tvCard = document.createElement("div");
    tvCard.className = "fav-card";

    const tvImage = document.createElement("img");
    tvImage.src = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
    tvImage.alt = show.name;

    tvCard.appendChild(tvImage);
    favContainer.appendChild(tvCard);
  });
}
// Fetch Movies and TV Shows, then Filter for Favorites
function fetchDataAndDisplayFavorites() {
  Promise.all([
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    ).then((response) => response.json()),
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    ).then((response) => response.json()),
  ])
    .then(([movieData, tvData]) => {
      displayShabiFavorites(movieData.results, tvData.results);
    })
    .catch((err) => console.error("Error fetching data:", err));
}

fetchDataAndDisplayFavorites();
