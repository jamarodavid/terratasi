import React from "react";
import YouTube from "react-youtube";
const YoutubePlayer = () => {
  // YOUTUBE VIDEO FUNCTION
  const opts = {
    width: "1125px",
    height: "571px", // Set height here if needed
    borderRadius: "2.7rem",
    playerVars: { autoplay: 1 },
  };
  const videoReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <>
      <h1>YouTube Player</h1>
      <div>
        <div
          style={{
            maxWidth: "1125px",
            margin: "auto",
            marginTop: "30px",
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
