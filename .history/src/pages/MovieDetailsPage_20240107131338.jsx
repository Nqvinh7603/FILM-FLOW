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

  return (
    <>
      <div className="w-full h-screen bg-cover bg-no-repeat">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
