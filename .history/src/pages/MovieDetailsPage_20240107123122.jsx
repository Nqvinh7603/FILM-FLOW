import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/{movie_id}?api_key=`
  );
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
