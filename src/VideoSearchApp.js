import React from "react";
import SearchBar from "./Components/VideoSearch/SearchBar";
import youtube from "./Api/youtube";
import VideoList from "./Components/VideoSearch/VideoList";

class VideoSearchApp extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default VideoSearchApp;
