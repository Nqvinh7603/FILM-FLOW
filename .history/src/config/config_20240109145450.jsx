export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "dae28cb2a8dbebf72e0eacb8a51b947a";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
    getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
    getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}` ,
    getMovieCredits: (movieId) => `${tmdbEndpoint}/${movieId}/credits?api_key=${apiKey}`, 
    getMovieVideos: (movieId) => `${tmdbEndpoint}/${movieId}/videos?api_key=${apiKey}`,
    getMovieSimilar: (movieId) => `${tmdbEndpoint}/${movieId}/similar?api_key=${`
};
