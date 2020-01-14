import React, { useState, useEffect } from "react";
import SeasonDisplay from "./Components/SeasonApp/SeasonDisplay";
import Spinner from "./Components/Spinner/Spinner";

const SeasonApp = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
      },
      err => {
        setErrorMessage(err.message);
      }
    );
  }, []);

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message=" Please accept location request" />;
  }

  return (
    <div className="border red">
      {content}
    </div>
  )

};

export default SeasonApp;
