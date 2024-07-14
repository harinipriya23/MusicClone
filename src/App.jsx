import React, { useContext } from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Display from "./components/Display";
import {PlayerContext} from "./context/PlayerContext";



const App = () => {
  const {audioRef,songTrack} = useContext(PlayerContext)
  return (
    <div className="h-screen">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
      <audio src={songTrack.file} ref={audioRef} preload="auto"></audio>
    </div>
  );
};

export default App;
