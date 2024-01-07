import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  return <div>Movie Details Page</div>;
};

export default MovieDetailsPage;
