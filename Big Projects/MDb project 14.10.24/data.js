// data.js

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGNkNTE0N2RkMThmMjNmNThmY2UwNWYyNGRkZDY3YiIsIm5iZiI6MTcyOTI0MTg0My41NzMzNDIsInN1YiI6IjY3MGQxMTA1ZDVmOTNhM2RhMGJiYjhiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqbO_PC8w1EnwTgds0i-Hbdm1YYXwPevdT4psOkXLRU",
  },
};

export function fetchMoviesData(endpoint, displayCallback) {
  fetch(`https://api.themoviedb.org/3/${endpoint}`, options)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => displayCallback(data.results))
    .catch((err) => console.error(`Fetch error: ${endpoint}`, err));
}

export function fetchTVShowsData(endpoint, displayCallback) {
  fetch(`https://api.themoviedb.org/3/${endpoint}`, options)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => displayCallback(data.results))
    .catch((err) => console.error(`Fetch error: ${endpoint}`, err));
}
