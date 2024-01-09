import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCards from "./MovieCards";
import useSWR from "swr";
import { fetcher } from "../../config/config";
const MovieList = () => {
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=dae28cb2a8dbebf72e0eacb8a51b947a",
    fetcher
  );
  const [movies, setMovies] = useState;
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
