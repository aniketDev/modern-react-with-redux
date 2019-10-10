import React from "react";
import axios from "axios";
import SearchBar from "./Components/ImageSearch/SearchBar";

class ImageSearchApp extends React.Component {
  onSearchSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID a95297c93c3024004daf90267504625eb6b3074b3a33ee5e470275fd44ac06c6"
        }
      })
      .then(response => console.log(response.data.results));
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
