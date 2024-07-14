import React from "react";
import NavBar from "./NavBar";
import { albumsData, songsData } from "../assets/assets/assets";
import Albums from "./Albums";
import SongPlayer from "./SongPlayer";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="mb-4 mt-4 ml-2">
       <h1 className="font-semibold text-2xl ">features charts</h1>
       <div className="flex overflow-auto ">
         {albumsData.map((item,index)=>(<Albums key={index} id={item.id} name={item.name} 
         desc={item.desc} image={item.image}  />))}
       </div>
      </div>
      <div className="mb-4 mt-4 ml-2">
       <h1 className="font-semibold text-2xl ">today's biggest hits</h1>
       <div className="flex overflow-auto " >
         {songsData.map((item,index)=>(<SongPlayer key={index} id={item.id} name={item.name} 
         desc={item.desc} image={item.image}/>))}
     
       </div>
      </div>
    </>
  );
};

export default Home;
