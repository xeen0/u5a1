import React from "react";
import ReactPlayer from "react-player/youtube";

// Only loads the YouTube player
const VideoPlayer = () => {
    const prop ={
        playing:true,
        controls:true,
    }
  return (
    <div className="HomeContainerT" style={{padding:"30px"}}>
      <ReactPlayer{ ...prop}url="https://youtu.be/JkM29-2FGck" />
    </div>
  );
};

export default VideoPlayer;
