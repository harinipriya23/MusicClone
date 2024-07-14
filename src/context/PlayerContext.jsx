import { Children, createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets/assets";

export const PlayerContext = createContext(null);
const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [songTrack, setSongTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };
  async function songWithId(id) {
    await setSongTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  }
  const previous = async () => {
    if (songTrack.id > 0) await setSongTrack(songsData[songTrack.id - 1]);
    await audioRef.current.play();
    setPlayStatus(true);
  };
  const next = async () => {
    if (songTrack.id < songsData.length - 1)
      await setSongTrack(songsData[songTrack.id + 1]);
    await audioRef.current.play();
    setPlayStatus(true);
  };
  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };
  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    songTrack,
    setSongTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    songWithId,
    next,
    previous,
    seekSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
