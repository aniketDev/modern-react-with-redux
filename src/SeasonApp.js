import React, { useState, useEffect } from "react";
import SeasonDisplay from "./Components/SeasonApp/SeasonDisplay";
import Spinner from "./Components/Spinner/Spinner";
import useLocation from './Components/SeasonApp/useLocation';

const SeasonApp = () => {
  const [lat, errorMessage] = useLocation();

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
