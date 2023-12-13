import React, { useEffect, useRef, useState } from "react";
import Api from "../services/Api";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    Api.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight=(element)=>{
      element.scrollLeft+=1300
  }
  const sliderLeft=(element)=>{
      element.scrollLeft-=1300
  }
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[40px] absolute
        mx-14 mt-[195px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />

      <HiChevronRight
        className="hidden md:block text-white text-[40px] absolute
        mx-14 mt-[195px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-10 py-4
     scrollbar-hide scroll-smooth"ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[350px]  object-fill mr-4 rounded-md hover:border-[2px]
            border-gray-300 transition-all ease-in-out h-[330px] shadow-lg shadow-black "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
