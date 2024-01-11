import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
// import MovieCards from "./MovieCards";
import MovieCards, { MovieCardSkeleton } from "./MovieCards";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config/config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1
//https://api.themoviedb.org/3/movie/now_playing?api_key=dae28cb2a8dbebf72e0eacb8a51b947a
const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      {isLoading && (
        <>
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCardSkeleton></MovieCardSkeleton>
            </SwiperSlide>
          </Swiper>
        </>
      )}
      {!isLoading && (
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCards item={item}></MovieCards>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};
MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

function FallbackComponent() {
  return (
    <p className="bg-red-50 text-red-400">
      Something went wrong with this component
    </p>
  );
}

export default withErrorBoundary(MovieList, {
  FallbackComponent,
});