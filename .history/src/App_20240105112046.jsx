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
        <div className="h-full w-full rounded-lg relative ">
          <img
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZlbmdlcnN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
