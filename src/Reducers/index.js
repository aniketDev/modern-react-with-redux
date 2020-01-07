import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Marcarena", duration: "2:30" },
    { title: "All star", duration: "3:15" },
    { title: "Tum se hi", duration: "1:45" }
  ];
};

const selectetdSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectetdSongReducer
});
