import React from "react";
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full flex mt-2 justify-between">
        <div className="flex text-xl">
          <h1 className="font-bold ml-2">music</h1>
          <div className="flex m-2">
            <img onClick={()=>navigate(-1)}
              src={assets.arrow_left}
              alt=""
              className="gap-2 rounded-2xl cursor-pointer size-4"
            />
            <img onClick={()=>navigate(1)}
              src={assets.arrow_right}
              alt=""
              className="gap-2 rounded-2xl cursor-pointer size-4"
            />
          </div>
        </div>
        <div className="items-center font-semibold text-[15px] flex gap-5 ">
          <p className="bg-white hidden md:block text-black px-2 py-1 rounded-3xl ">
            explore premium
          </p>
          <p>install app</p>
          <p className="bg-purple-800 size-8 mr-2 rounded-full flex justify-center items-center  ">
            JH
          </p>
        </div>
      </div>
      <div className="flex m-2 ml-3 mt-4 font-semibold gap-8">
        <p className="bg-white text-black rounded-2xl py-1 cursor-pointer px-4">all</p>
        <p className=" rounded-md cursor-pointer py-1 px-4">music</p>
        <p className=" rounded-md cursor-pointer py-1 px-4">podcasts</p>
      </div>
    </>
  );
};

export default NavBar;
