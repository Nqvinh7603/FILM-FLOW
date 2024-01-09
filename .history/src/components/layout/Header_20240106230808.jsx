import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <NavLink to="/" className={({ isActive }) => isActive}>
        Trang chủ
      </NavLink>
      <NavLink to="/movies">Phim</NavLink>
    </header>
  );
};

export default Header;
