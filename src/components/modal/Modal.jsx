import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

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

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.object,
};

export default Modal;
