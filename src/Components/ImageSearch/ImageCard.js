import React from "react";

class ImageCard extends React.Component {
  render() {
    const { alt_description, urls } = this.props.image;

    return <img alt={alt_description} src={urls} />;
  }
}

export default ImageCard;
