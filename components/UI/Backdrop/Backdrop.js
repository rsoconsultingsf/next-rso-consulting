import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className={"backdrop"}
      onClick={props.onClick}
      onKeyDown={props.onClick}
      aria-hidden="true"
    ></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
