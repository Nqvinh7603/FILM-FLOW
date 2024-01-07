import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log("test ~ $(selector).data(key);", data);
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetailsPage;
