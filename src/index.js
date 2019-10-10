import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = function() {
  const alignCenter = {
    display: "flex",
    justifyContent: "center",
    flexFlow: "column",
    padding: "3rem"
  };

  return (
    <div style={alignCenter} className="ui comments">
      <ApprovalCard>
        <CommentDetail
          author="Aniket"
          timeAgo="Today at 1.00PM"
          comment="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ankita"
          timeAgo="Today at 2.00PM"
          comment="Cool blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Mr. Mandal"
          timeAgo="Yesterday at 3.22PM"
          comment="Very helpful blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const SeasonApp = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div>Latitude: </div>;
};

// Class component
class SeasonAppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<SeasonAppClass />, document.querySelector("#root"));
