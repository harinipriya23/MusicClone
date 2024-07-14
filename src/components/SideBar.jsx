import React from "react";
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate()
  return (
    <div className="h-full w-[25%] flex-col mt-3 p-2 hidden lg:flex ">
      <div className=" bg-zinc-950 p-4  rounded-xl justify-around text-base gap-5 h-[15%] flex flex-col ">
        <div onClick={()=>navigate('/')} className="flex items-center pl-5 gap-3 cursor-pointer">
          <img className="w-6" src={assets.home_icon} />
          <p className="font-bold">home</p>
        </div>
        <div className="flex items-center pl-5 gap-3 cursor-pointer">
          <img className="w-6" src={assets.search_icon} />
          <p className="font-bold">search</p>
        </div>
      </div>
      <div className="bg-zinc-950 h-[85%] rounded">
        <div className="flex items-center justify-between p-4">
          <div className=" flex items-center ml-2 gap-3">
            <img src={assets.stack_icon} className="w-7" />
            <p className="font-semibold"> your library</p>
          </div>
          <div className="flex ml-20 pl-10 gap-4">
            <img src={assets.arrow_icon} className="w-5" />
            <img src={assets.plus_icon} className="w-5" />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start bg-zinc-800 rounded-xl m-3 p-3" >
          <h2 className="font-semibold  text-base" >create your own playlist</h2>
          <p className="font-extralight " >it's easy ! we will help you </p>
          <button className="bg-white  rounded-full text-black my-2 text-[15px] capitalize font-semibold px-4 py-2" >create playlist</button>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start bg-zinc-800 rounded-xl m-3 p-3" >
          <h2 className="font-semibold  text-base" >let's find some podcasts to follow</h2>
          <p className="font-extralight " >we'll keep you updated on new episodes </p>
          <button className="bg-white  rounded-full text-black my-2 text-[15px] capitalize font-semibold px-4 py-2" >browse podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
