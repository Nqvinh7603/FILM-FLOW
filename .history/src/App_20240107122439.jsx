import { Fragment } from "react";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import Main from "./components/layout/Main";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movie/:movieId"
              element={<MoviePage></MoviePage>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
