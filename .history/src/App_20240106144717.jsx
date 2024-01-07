import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import "swiper/scss";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<></>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
