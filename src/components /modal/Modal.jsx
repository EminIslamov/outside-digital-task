import React from "react";
import "./modal.css";
import exitButton from "./svgs/exitButton.svg";
import { ReactSVG } from "react-svg";

function Modal({ active, setActive, children }) {
  return (
    <div className="orange-bgc">
      <div
        className={active ? "modal active orange-bgc" : "modal orange-bgc"}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? "modal_content active" : "modal_content"}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
