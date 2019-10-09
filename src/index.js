import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = function() {
  const alignCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    padding: "3rem"
  };

  return (
    <div style={alignCenter} className="ui comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
