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
    </Fragment>
  );
}

export default App;
