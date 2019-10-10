import React from "react";
import SearchBar from "./Components/ImageSearch/SearchBar";

class ImageSearchApp extends React.Component {
  onSearchSubmit = term => {
    console.log("submit called " + term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default ImageSearchApp;
