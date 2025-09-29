import React, { useEffect, useRef } from "react";
import "./Header.css";
import videoLoop from "/video_loop.mp4";

const Header: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate = 0.75; // velocidad más lenta (ajusta a gusto)
    }
  }, []);

  return (
    <header className="video-header">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoLoop} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
    </header>
  );
};

export default Header;
