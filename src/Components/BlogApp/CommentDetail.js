import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <div className="avatar">
        <img alt="avatar" src={props.avatar} />
      </div>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <div>{props.timeAgo}</div>
        </div>
        <div className="text">{props.comment}</div>
        <div className="actions">
          <a href="/" className="">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
