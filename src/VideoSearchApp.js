import React from "react";
import SearchBar from "./Components/VideoSearch/SearchBar";
import youtube from "./Api/youtube";

class VideoSearchApp extends React.Component {
  onSearchSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
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
