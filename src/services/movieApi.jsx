import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWI1MGViODdjNDRjMGZhZWQzNDk1MDhlMTdhMjNlNyIsInN1YiI6IjYzY2RmYzhkN2YwNTQwMDA4YTc2ZjgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gmCW08ZQNLMg0me3qQkLHhfYPmyE4s7NpxqhU61GSMQ";

const headers = {
  Authorization: `Bearer ${AUTH_TOKEN}`,
  accept: "application/json",
};
export const getTrendingMovies = async () => {
  return axios
    .get(`${API_BASE_URL}/trending/all/day?language=en-US`, { headers })

    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const getMovie = async (moviesId) => {
  return axios.get(`${API_BASE_URL}/movie/${moviesId}?language=en-US`, {
    headers,
  });
};
export const creditsMovie = async (moviesId) => {
  return axios
    .get(`${API_BASE_URL}/movie/${moviesId}/credits?language=en-US`, {
      headers,
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
export const reviewsMovie = async (moviesId) => {
  return axios
    .get(`${API_BASE_URL}/movie/${moviesId}/reviews?language=en-US`, {
      headers,
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
export const searchMovies = async (movie) => {
  return axios.get(
    `${API_BASE_URL}/search/movie?query=${movie}&include_adult=false&language=en-U`,
    {
      headers,
    }
  );
};
