import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCards from "./MovieCards";
import useSWR from "swr";
import { fetcher } from "../../config/config";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=dae28cb2a8dbebf72e0eacb8a51b947a",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 && movies.map(item => (

      
        <SwiperSlide>
          <MovieCards></MovieCards>
          ))};
        
      </Swiper>
    </div>
  );
};

export default MovieList;
