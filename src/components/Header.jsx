import React, {useState} from "react";
import logo from "../assets/Images/logo.png";
import HeaderItem from "./HeaderItem.jsx";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
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
      name: "ORIGINALS",
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
    <div className="flex items-center justify-between w-full p-5">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[88px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map((item, index) => index < 3&& (
            <HeaderItem name={""} Icon={item.icon} />
          ))}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ?<div className="absolute mt-3 bg-[#121212] border-[1px]
              border-grey-700 p-3 px-5 py-3">
              {menu.map((item, index) => index > 2&& (
                <HeaderItem name={item.name} Icon={item.icon} />
              ))}       
            </div>:null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-10 rounded-full"
      />
    </div>
  );
}

export default Header;
