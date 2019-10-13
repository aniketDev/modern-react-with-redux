import React from "react";
import SearchBar from "./Components/VideoSearch/SearchBar";
import youtube from "./Api/youtube";
import VideoList from "./Components/VideoSearch/VideoList";

class VideoSearchApp extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("From the app!", video);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default VideoSearchApp;
