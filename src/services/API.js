const API = 'b610c698525bd18a195a4333e81be16d'
const BASE_URL = `https://api.themoviedb.org/3/movie/76341?api_key=${API}`


// https://api.themoviedb.org/3/movie/76341?api_key=b610c698525bd18a195a4333e81be16d

export function fetchTrending() {
    return `${BASE_URL}/trending/get-trending`
}

export function fetchSearchMovies() {}

export function fetchMovieDetails() {}

export function fetchMovieCredits() {}

export function fetchMovieReviews() {}
