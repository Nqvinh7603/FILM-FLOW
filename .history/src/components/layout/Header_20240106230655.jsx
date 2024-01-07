import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <NavLink to="/" className="text-primary">
        Trang chủ
      </NavLink>
      <span>Phim</span>
    </header>
  );
};

export default Header;
