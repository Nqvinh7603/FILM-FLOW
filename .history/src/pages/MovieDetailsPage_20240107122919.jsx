import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const {data, error} =   
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
