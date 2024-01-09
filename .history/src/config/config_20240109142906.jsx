export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "dae28cb2a8dbebf72e0eacb8a51b947a";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
    getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`
};