import React from "react";

const HomePage = () => {
  return (
    <Fragement>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold ">
          Xem ngay
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold ">
          Đánh giá cao nhất
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold ">
          Thịnh hành
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragement>
  );
};

export default HomePage;
