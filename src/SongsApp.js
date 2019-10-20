import React from "react";
import SongList from "./Components/Songs/SongList";

const SongsApp = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default SongsApp;
