import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function CardMovie({ movie }) {
  return (
    <>

    
        <img src={IMAGE_BASE_URL + movie.poster_path} className="w-[110px] md:w-[185px] rounded-lg hover:border-[3px] hover:border-gray-200 border-gray-600 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer"/>

    </>
  );
}

export default CardMovie;
