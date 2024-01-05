import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (NavLink
    // eslint-disable-next-line react/jsx-no-undef
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span>Trang chủ</span>
        <span>Phim</span>
      </header>
    </Fragment>
  );
}

export default App;
