import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCards from "./MovieCards";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config/config";
//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1
//https://api.themoviedb.org/3/movie/now_playing?api_key=dae28cb2a8dbebf72e0eacb8a51b947a
const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(
    tmdbAPI.getMovieList,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCards item={item}></MovieCards>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
