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
          <div className="overlay absolute inset-0 bg-gradient-to-t from-black to-black rounded-lg"></div>
          <img
            src="https://images.unsplash.com/photo-1561816544-21ecbffa09a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3Dto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZlbmdlcnN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Phim: ABCD</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="px-4 py-2 border border-white rounded-md">
                Abc
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Bcd
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                Def
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Xem phim
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
