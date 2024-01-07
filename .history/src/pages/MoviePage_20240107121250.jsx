import React from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieCards from "../components/movie/MovieCards";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=dae28cb2a8dbebf72e0eacb8a51b947a`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10">
      <div className="flex">
        <div className="flex-1">
          <div className="w-full" type=></div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCards key={item.id} item={item}></MovieCards>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
