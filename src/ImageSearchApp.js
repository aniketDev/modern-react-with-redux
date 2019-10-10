import React from "react";
import SearchBar from "./Components/ImageSearch/SearchBar";

class ImageSearchApp extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar />
      </div>
    );
  }
}

export default ImageSearchApp;
