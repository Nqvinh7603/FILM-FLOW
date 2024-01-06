import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import "swiper/";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
