import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets/assets";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const { seekBg, seekBar,seekSong , play, pause, playStatus,songTrack,time,next,previous} =
    useContext(PlayerContext);
  return (
    <div className="h-[10%] flex justify-between items-center px-5 m-3 rounded-lg bg-zinc-900">
      <div className="hidden gap-2 lg:flex items-center">
        <img className="w-12" src={songTrack.image} />
        <div>
          <p className="font-semibold">{songTrack.name}</p>
          <p>{songTrack.desc.slice(0, 15)}..</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 m-auto items-center">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
            />
          )}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>
        <div className="flex items-center gap-1">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg} onClick={seekSong}
            className="w-[60vh] max-w-[500px] bg-gray-600 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar} 
              className="h-1 rounded-full border-none bg-green-600"
            />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <img className="w-4" src={assets.plays_icon} />
        <img className="w-4" src={assets.mic_icon} />
        <img className="w-4" src={assets.queue_icon} />
        <img className="w-4" src={assets.speaker_icon} />
        <img className="w-4" src={assets.volume_icon} />
        <div className="w-20 bg-slate-600 h-1 rounded"></div>
        <img className="w-4" src={assets.mini_player_icon} />
        <img className="w-4" src={assets.zoom_icon} />
      </div>
    </div>
  );
};

export default Player;
