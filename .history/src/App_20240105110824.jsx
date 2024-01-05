import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="text-primary">Trang chủ</span>
        <span>Phim</span>
      </header>
    </Fragment>
  );
}

export default App;
