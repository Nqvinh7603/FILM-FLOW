import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCards from "./components/movie/MovieCards";
const MovieList = () => {
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCards></MovieCards>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCards></MovieCards>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCards></MovieCards>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCards></MovieCards>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCards></MovieCards>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCards></MovieCards>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCards></MovieCards>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
