import { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import "swiper/scss";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Router element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Router>
      </Routes>
    </Fragment>
  );
}

export default App;
