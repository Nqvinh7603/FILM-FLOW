import React from "react";

const MovieCards = ({ item }) => {
  const {} = item;
  return (
    <div className=" text-white movie-card rounded-lg p-3 bg-slate-800">
      <img
        src="https://m.media-amazon.com/images/M/MV5BMGUzOWMyYjAtYTE3OS00Njc0LWJiMTEtMDNiNjA0MTI1N2E3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-xl font-bold mb-3">Bố già</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>2020</span>
        <span>10.0</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary w-full">
        Xem phim
      </button>
    </div>
  );
};

export default MovieCards;
