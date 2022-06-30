import axios from 'axios';

const API_KEY = 'b610c698525bd18a195a4333e81be16d';
const BASE_URL = `https://api.themoviedb.org/3`;

// https://api.themoviedb.org/3/movie/76341?api_key=b610c698525bd18a195a4333e81be16d

export async function fetchMoviesTrending() {
  return await axios(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
}

export function fetchSearchMovies() {}

export function fetchMovieDetails() {}

export function fetchMovieCredits() {}

export function fetchMovieReviews() {}
