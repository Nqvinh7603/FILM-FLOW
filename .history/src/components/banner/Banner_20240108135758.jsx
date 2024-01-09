import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import Button from "../button/Button";
const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=dae28cb2a8dbebf72e0eacb8a51b947a`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-10 overflow-hidden">
      <Swiper grapCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  const { title, poster_path } = item;
  const navigate = 
  return (
    <div className="h-full w-full rounded-lg relative ">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg  "></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg "
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-2 border border-white rounded-md">Abc</span>
          <span className="px-4 py-2 border border-white rounded-md">Bcd</span>
          <span className="px-4 py-2 border border-white rounded-md">Def</span>
        </div>
        <Button onClick={() => {}}></Button>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Xem phim
        </button>
      </div>
    </div>
  );
}
export default Banner;
