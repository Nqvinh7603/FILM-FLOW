import React from "react";

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
