import React, { useContext } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const AlbumsItem = () => {
  const { id } = useParams();
  const albums = albumsData[id];
  const {songWithId} = useContext(PlayerContext)
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row  mt-10 ml-5 ">
        <img src={albums.image} className="p-2 w-[300px] rounded-2xl " />
        <div className="m-2 mt-5 md:mt-24 flex flex-col ml-5">
          <p className="text-lg font-semibold tracking-wider">playlists</p>
          <h1 className="text-5xl md:text-7xl font-bold">{albums.name}</h1>
          <p className="font-semibold mt-5 ">{albums.desc}</p>
          <p className="flex mt-2 flex-row items-center gap-1">
            <img className="size-4  md:size-6" src={assets.spotify_logo} />
            <b>spotify</b>1,176,959 likes <b>50 songs</b>- about 2 hr 45 min
          </p>
        </div>
      </div>
      <div className="text-[17px] text-neutral-300 mt-3 ml-6 grid grid-cols-3 lg:grid-cols-4">
        <p className="">
          <b className="pr-2">#</b>title
        </p>
        <p>album</p>
        <p className="hidden md:block">date added</p>
        <img className="size-5" src={assets.clock_icon} />
      </div>
      <hr className="m-3" />
      {songsData.map((item, index) => (
        <div onClick={()=>songWithId(item.id)} key={index} className="cursor-pointer grid grid-cols-3 md:grid-cols-4 m-5 gap-2 items-center hover:bg-[#ffffff2b] p-2">
          <p className="flex flex-row gap-3">
            <b>{index + 1}</b>
            <img className="size-10" src={item.image} />
            {item.name}
          </p>
          <p>{albums.name}</p><p className="hidden md:block">few days ago</p><p>{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default AlbumsItem;
