import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div>Title: {video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
