import React from "react";
import SearchBar from "./Components/VideoSearch/SearchBar";
import youtube from "./Api/youtube";
import VideoList from "./Components/VideoSearch/VideoList";
import VideoDetail from "./Components/VideoSearch/VideoDetail";

class VideoSearchApp extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("house");
  }

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui divided two column grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoSearchApp;
