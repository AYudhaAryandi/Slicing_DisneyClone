import React, { useEffect, useRef, useState } from "react";
import Api from "../services/Api";
import CardMovie from "./CardMovie";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function ListMovie({ genreId }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    Api.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight=(element)=>{
    element.scrollLeft+=430
}
const sliderLeft=(element)=>{
    element.scrollLeft-=430
}
  return (
    <div>
      <HiChevronLeft
        className=" text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block left-5 absolute mt-[140px] "
        onClick={() => sliderLeft(elementRef.current)}
      />

      <div ref={elementRef} className="flex overflow-x-auto gap-5 scrollbar-hide scroll-smooth pt-5 px-5 pb-3">
        {movieList.map((item, index) => (
          <CardMovie movie={item} />
        ))}

        <HiChevronRight
          className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute right-6 mt-[130px]"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
    </div>
  );
}

export default ListMovie;
