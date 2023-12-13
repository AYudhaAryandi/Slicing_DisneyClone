import React from "react";

// image import
import disneyP from "../assets/Images/disney.png";
import marvelP from "../assets/Images/marvel.png";
import pixarP from "../assets/Images/pixar.png";
import nationalGP from "../assets/Images/nationalG.png";
import starwarP from "../assets/Images/starwar.png";

// video import
import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import nationalGV from "../assets/Videos/nationalG.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";

function HouseProduct() {
  const Product = [
    {
      id: 1,
      image: disneyP,
      video: disneyV,
    },
    {
      id: 2,
      image: pixarP,
      video: pixarV,
    },
    {
      id: 3,
      image: marvelP,
      video: marvelV,
    },
    {
      id: 4,
      image: starwarP,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalGP,
      video: nationalGV,
    },
  ];
  return (
    <div className="flex gap-5 md:gap-10 p-4 px-8 md:px-20">
      {Product.map((item) => (
        <div className="border-[2px] border-gray-400 hover:border-white rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-lg shadow-black">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 rounded opacity-0 hover:opacity-70 "
          ></video>
          <div className=" bg-zinc-800 rounded-md">
          <img src={item.image} className="w-full shadow-white" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default HouseProduct;
