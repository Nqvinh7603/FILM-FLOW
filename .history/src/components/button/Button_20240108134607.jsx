import React from "react";

const Button = () => {
  return (
    <button
      onClick={() => navigate(`/movie/${id}`)}
      className=" py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto"
    >
      Xem phim
    </button>
  );
};

export default Button;
