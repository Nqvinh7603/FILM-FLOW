import React, { useEffect } from "react";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieCards from "../components/movie/MovieCards";
import { useState } from "react";
import useDebounce from "../hook/useDebounce";

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=dae28cb2a8dbebf72e0eacb8a51b947a"
  );
  const filterDebounce = useDebounce(filter, 1000);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=dae28cb2a8dbebf72e0eacb8a51b947a&query=${filterDebounce}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=dae28cb2a8dbebf72e0eacb8a51b947a"
      );
    }
  }, [filterDebounce]);
  const movies = data?.results || [];
const [page, totalpage]
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            className="w-full p-4 bg-slate-800 text-white outline-none"
            type="text"
            placeholder="Nhập phim bạn muốn xem..."
            onChange={handleFilterChange}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCards key={item.id} item={item}></MovieCards>
          ))}
      </div>
      <div className="flex items-center justify-center mt-10 gap-x-5">
        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </span>
        <span className="cursor-pointer inline-block py-2 px-4 rounded-full leading-none bg-white text-slate-900">
          1
        </span>

        <span className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MoviePage;
