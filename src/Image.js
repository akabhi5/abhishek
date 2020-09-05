import React from "react";
import logo from "./abhishek.jpg";

const Image = () => {
  return (
    <div>
      <div className="container text-center mt-5">
        <img
          src={logo}
          className="rounded-circle main-image image-thumbnail"
          alt="abhishek"
        />
      </div>
    </div>
  );
};

export default Image;
