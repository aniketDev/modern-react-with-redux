import React from "react";
import ApprovalCard from "./Components/BlogApp/ApprovalCard";
import CommentDetail from "./Components/BlogApp/CommentDetail";
import faker from "faker";

const BlogApp = function() {
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

export default BlogApp;
