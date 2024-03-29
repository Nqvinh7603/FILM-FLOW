import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCards from "./MovieCards";
import useSWR from "swr";
import { fetcher } from "../../config/config";
//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1
//https://api.themoviedb.org/3/movie/now_playing?api_key=dae28cb2a8dbebf72e0eacb8a51b947a
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "curl --request GET \
    --url 'https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWUyOGNiMmE4ZGJlYmY3MmUwZWFjYjhhNTFiOTQ3YSIsInN1YiI6IjY1OTc5Njc1NjBjNTFkMzM5ODk3ODdkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xiYRXP3RsG-2qXfQaSZIT5yFTOMP0xIGXFqcf1sWSgs' \
    --header 'accept: application/json'",
    fetcher
  );

  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
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
