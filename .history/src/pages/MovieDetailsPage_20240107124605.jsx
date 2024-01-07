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
    <Fragment>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.back})`,
        }}
      ></div>
    </Fragment>
  );
};

export default MovieDetailsPage;