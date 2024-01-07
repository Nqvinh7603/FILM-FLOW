import { Fragment } from "react";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Trang chủ</span>
        <span>Phim</span>
      </header>
      <Banner></Banner>
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
          Sắp phát hành
        </h2>
        <MovieList type="upcoming"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
