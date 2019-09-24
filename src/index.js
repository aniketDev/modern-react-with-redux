import React from "react";
import ReactDOM from "react-dom";

const App = function() {
  return (
    <div className="ui comments">
      <div className="comment">
        <div className="avatar">
          <img alt="avatar" src="/images/avatar/small/jenny.jpg" />
        </div>
        <div className="content">
          <a href="/" className="author">
            Jenny Hess
          </a>
          <div className="metadata">
            <div>Just now</div>
          </div>
          <div className="text">Elliot you are always so right :)</div>
          <div className="actions">
            <a href="/" className="">
              Reply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
