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
export async function displayShabiFavorites() {
  const favContainer = document.getElementById("ShabiFav");
  favContainer.innerHTML = "";
  await displayFavoriteMovies(favContainer);
  await displayFavoriteTVShows(favContainer);
}
