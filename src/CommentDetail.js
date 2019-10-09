import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <div className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </div>
      <div className="content">
        <a href="/" className="author">
          Jenny Hess
        </a>
        <div className="metadata">
          <div>Just now</div>
        </div>
        <div className="text">Elliot you are always so right</div>
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
