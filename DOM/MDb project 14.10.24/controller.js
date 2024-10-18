const body = document.body;
const html = document.documentElement;
const colorButton = document.querySelector(".dayMode");
const colorButtonContainer = document.querySelector(".inDayMode");

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
      console.log("Popular Movies Data: ", data.results);
      displayPopularMovies(data.results);
    })
    .catch((err) => console.error("Popular Movies Fetch Error: ", err));
}

// Fetching Trending TV Shows
function fetchTVShows() {
  fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Trending TV Shows Data: ", data.results);
      displayTVShows(data.results);
    })
    .catch((err) => console.error("TV Shows Fetch Error: ", err));
}

// Fetching Top Rated Movies
function fetchTopRatedMovies() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Top Rated Movies Data: ", data.results);
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
      console.log("Upcoming Movies Data: ", data.results);
      displayUpcomingMovies(data.results);
    })
    .catch((err) => console.error("Upcoming Movies Fetch Error: ", err));
}

// View Functions

// Display Popular Movies
function displayPopularMovies(movies) {
  const popularContainer = document.getElementById("popular-container");
  popularContainer.innerHTML = "";

  movies.forEach((movie) => {
    if (movie.poster_path) {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      const movieImage = document.createElement("img");
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieImage.alt = movie.title;

      movieCard.appendChild(movieImage);
      popularContainer.appendChild(movieCard);
    } else {
      console.log(`No poster found for movie: ${movie.title}`);
    }
  });
}

// Display Trending TV Shows
function displayTVShows(tvShows) {
  const tvContainer = document.getElementById("tv-container");
  tvContainer.innerHTML = "";

  tvShows.forEach((show) => {
    if (show.poster_path) {
      const tvCard = document.createElement("div");
      tvCard.className = "movie-card";

      const tvImage = document.createElement("img");
      tvImage.src = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
      tvImage.alt = show.name;

      tvCard.appendChild(tvImage);
      tvContainer.appendChild(tvCard);
    } else {
      console.log(`No poster found for show: ${show.name}`);
    }
  });
}

// Display Top Rated Movies
function displayTopRatedMovies(movies) {
  const topRatedContainer = document.getElementById("top-rated-container");
  topRatedContainer.innerHTML = "";

  movies.forEach((movie) => {
    if (movie.poster_path) {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      const movieImage = document.createElement("img");
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieImage.alt = movie.title;

      movieCard.appendChild(movieImage);
      topRatedContainer.appendChild(movieCard);
    } else {
      console.log(`No poster found for movie: ${movie.title}`);
    }
  });
}

// Display Upcoming Movies
function displayUpcomingMovies(movies) {
  const upcomingContainer = document.getElementById("upcoming-container");
  upcomingContainer.innerHTML = "";

  movies.forEach((movie) => {
    if (movie.poster_path) {
      const movieCard = document.createElement("div");
      movieCard.className = "movie-card";

      const movieImage = document.createElement("img");
      movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieImage.alt = movie.title;

      movieCard.appendChild(movieImage);
      upcomingContainer.appendChild(movieCard);
    } else {
      console.log(`No poster found for movie: ${movie.title}`);
    }
  });
}

// Initial Fetch Calls
fetchPopularMovies();
fetchTVShows();
fetchTopRatedMovies();
fetchUpcomingMovies();
