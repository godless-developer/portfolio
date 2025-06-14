import { Volume2, VolumeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // эхлэхдээ false

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.log("User interaction required:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const playOnInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay blocked:", err);
          });
      }
      window.removeEventListener("click", playOnInteraction);
    };

    window.addEventListener("click", playOnInteraction);
    return () => window.removeEventListener("click", playOnInteraction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-4 ">
      <button
        onClick={toggleAudio}
        className="text-white text-2xl hover:scale-110 transition cursor-pointer"
      >
        {isPlaying ? (
          <Volume2
            strokeWidth={1.5}
            width={20}
            className="text-white hover:text-orange-700 transition-colors"
          />
        ) : (
          <VolumeOff
            strokeWidth={1.5}
            width={20}
            className="text-white hover:text-orange-700 transition-colors"
          />
        )}
      </button>

      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/bg-audio.mp3" type="audio/mpeg" />
        <source src="/audio/bg-audio.ogg" type="audio/ogg" />
      </audio>
    </header>
  );
}
