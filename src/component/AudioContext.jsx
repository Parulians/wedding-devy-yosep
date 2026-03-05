import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import music from "../assetsU2/westlife21.mp3";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;
  }, []);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (audioRef.current.paused) {
      play();
    } else {
      pause();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, play, pause }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
