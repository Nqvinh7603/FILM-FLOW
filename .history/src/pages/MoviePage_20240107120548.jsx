import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config/config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=dae28cb2a8dbebf72e0eacb8a51b947a`,
    fetcher
  );
  const movies = data?.results || [];
  return <div className="py-10"></div>;
};

export default MoviePage;
