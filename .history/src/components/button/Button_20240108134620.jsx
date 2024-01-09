import React from "react";
import { Navigate } from "react-router-dom";

const Button = () => {
  return (
    <button
      onClick={() => Navigate(`/movie/${id}`)}
      className=" py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto"
    >
      Xem phim
    </button>
  );
};

export default Button;
