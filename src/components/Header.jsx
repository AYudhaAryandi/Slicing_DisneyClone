import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Navbar from "./Navbar";   
import Profile from ".././assets/Images/ManProfile.png";

function Header() {
    const [toggle,setToggle]=useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINAL",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center gap-96  justify-between m-5 ">
      <div className="flex  gap-10  items-center">
        <img src={logo} className="w-[90px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item,index) => (
            <Navbar key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && ( //lebih dari 3 maka akan di sembunyikan ("<3&&")
                <Navbar key={index} name={""} Icon={item.icon} />
              )
          )}
        </div>

        <div className="md:hidden" onClick={()=>setToggle(!toggle)}>
          <Navbar name={""} Icon={HiDotsVertical} />
         {toggle? <div className="absolute mt-3 border-[1px] bg-[#121212] border-gray-500 p-2 py-3 pr-9">
            {menu.map(
              (item, index) =>
                index > 2 && ( //kurang dari 3 maka akan di tampilkan ketika hidots vertikalnya di klik (">3&&")
                  <Navbar key={index} name={item.name} Icon={item.icon} />
                ))}
          </div>:null}
        </div>
      </div>
      <img src={Profile} className="w-10 rounded-full cursor-pointer"/>
    </div>
  );
}

export default Header;
