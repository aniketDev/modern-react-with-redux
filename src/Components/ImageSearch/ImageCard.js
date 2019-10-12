import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  render() {
    const { alt_description, urls } = this.props.image;

    return <img ref={this.imageRef} alt={alt_description} src={urls.regular} />;
  }
}

export default ImageCard;
