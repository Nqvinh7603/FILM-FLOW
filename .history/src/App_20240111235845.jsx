import { Fragment } from "react";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import Main from "./components/layout/Main";
import "swiper/scss";
// import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
//import MovieDetailsPage from "./pages/MovieDetailsPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
//const MoviePageV2 = lazy(() => import("./pages/MoviePageV2"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;