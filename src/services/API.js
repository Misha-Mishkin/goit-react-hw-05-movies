import axios from 'axios';

const API_KEY = 'b610c698525bd18a195a4333e81be16d';
const BASE_URL = `https://api.themoviedb.org/3`;

export async function fetchMoviesTrending() {
  return await axios(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
}

export async function fetchSearchMovies() {
  return await axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
}

export async function fetchMovieDetails(movie_id) {
  return await axios(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
}

export async function fetchMovieCredits(movie_id) {
  return await axios(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export async function fetchMovieReviews() {
  return await axios(
    `${BASE_URL}/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}