import React from "react";
import MovieList from "../components/movie/MovieList";

const MoviePage = () => {
  const MovieList = ({ type = "now_playing" }) => {
    const { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${type}?api_key=dae28cb2a8dbebf72e0eacb8a51b947a`,
      fetcher
    );
    const movies = data?.results || [];
  return <div className="py-10"></div>;
};

export default MoviePage;
