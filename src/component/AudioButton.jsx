import { useAudio } from "../component/AudioContext";

const AudioButton = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <button
      onClick={togglePlay}
      className="w-12 h-12 rounded-full border-2 border-white
                 bg-[#ffb8b8] text-[#AD1919]
                 flex items-center justify-center
                 shadow-lg active:scale-95 transition"
    >
      {isPlaying ? "❚❚" : "▶"}
    </button>
  );
};

export default AudioButton;
