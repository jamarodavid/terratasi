import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = () => {
  // YOUTUBE VIDEO FUNCTION
  const opts = {
    maxWidth: "1125px",
    borderRadius: "2rem",
    playerVars: { autoplay: 1 },
  };
  const videoReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
      <div>
        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
            marginTop: "12px",
            minHeight: "30vh",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <YouTube videoId="giv2GL8lp94" opts={opts} onReady={videoReady} />
        </div>
      </div>
    </>
  );
};

export default YoutubePlayer;
