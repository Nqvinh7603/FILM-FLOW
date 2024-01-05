import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
        <span className="text-primary">Trang chủ</span>
        <span>Phim</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="h-full w-full rounded-lg relative "></div>
      </section>
    </Fragment>
  );
}

export default App;
