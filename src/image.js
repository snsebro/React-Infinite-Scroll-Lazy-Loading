import React from "react";

const ImageComponent = ({ src }) => {
  return (
    <img src={src} alt="Avatar" style={{ width: "100%", height: "100%" }} />
  );
};

export default ImageComponent;
