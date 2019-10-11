import React from "react";
import "./ImageList.css";

const ImageList = props => {
  const images = props.images.map(({ id, alt_description, urls }) => {
    return <img src={urls.regular} alt={alt_description} key={id} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
