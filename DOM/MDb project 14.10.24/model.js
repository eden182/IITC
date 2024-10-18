export const model = {
  fetchPopularMovies: async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer YOUR_API_KEY",
      },
    };

    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data; // Return the fetched data
    } catch (error) {
      console.error("Fetch error: ", error);
      throw error; // Rethrow to handle it in the controller if needed
    }
  },
};
