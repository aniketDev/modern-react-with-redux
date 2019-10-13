import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const videoList = props.videos.map(video => {
    return (
      <div>
        <div>
          <VideoItem video={video} />
        </div>
      </div>
    );
  });

  return <div>{videoList}</div>;
};

export default VideoList;
