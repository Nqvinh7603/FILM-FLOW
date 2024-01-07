import { Fragment } from "react";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import Header from "./components/layout/Header";
function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Fragment>
      <Header></Header>
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
          Thịnh hành
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
}

export default App;
