import React from "react";
import ReactDOM from "react-dom";

function getbuttonText() {
  return "Click on me!";
}

function getTime() {
  return new Date().toLocaleDateString();
}
const App = function() {
  // const buttonText = "Click me!";
  // const buttonText = ["Click", "me"];
  const buttonText = { text: "Click me" };
  // const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {/* or, <button style={style}> */}
        {/* {buttonText} */}
        {buttonText.text}
        {/* {getbuttonText()} */}
      </button>
      <h2>{getTime()}</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
