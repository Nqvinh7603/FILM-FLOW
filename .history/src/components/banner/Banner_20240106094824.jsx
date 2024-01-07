import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config/config";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=dae28cb2a8dbebf72e0eacb8a51b947a`,
    fetcher
  );
  const movies = data.results || [];
    <section className="banner h-[400px] page-container mb-10">
      <div className="h-full w-full rounded-lg relative ">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg  "></div>
        <img
          src="https://cdn.tuoitrethudo.com.vn/stores/news_dataimages/ngokhucquanganh/062021/14/08/2509_Poster_1.jpg?rt=20210614082516"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">Phim: ABCD</h2>
          <div className="flex items-center gap-x-3 mb-8">
            <span className="px-4 py-2 border border-white rounded-md">
              Abc
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Bcd
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Def
            </span>
          </div>
          <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
            Xem phim
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
