import { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import "swiper/scss";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Fragment>
      <Router>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Router>
    </Fragment>
  );
}

export default App;
