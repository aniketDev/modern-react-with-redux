import React from "react";
import SearchBar from "./Components/VideoSearch/SearchBar";
import youtube from "./Api/youtube";

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
      </div>
    );
  }
}

export default VideoSearchApp;
