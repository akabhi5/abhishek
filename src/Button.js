import React from "react";

const Button = (props) => {
  const { name, icon, href } = props;

  return (
    <>
      <a
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        href={href}
        target="blank"
      >
        <i className={icon}></i> {name}
      </a>
    </>
  );
};

export default Button;
