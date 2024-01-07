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
          <input
            className="w-full"
            type="text"
            placeholder="Nhập phim bạn muốn xem..."
          />
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
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