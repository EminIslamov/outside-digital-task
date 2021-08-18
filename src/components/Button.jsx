import React from "react";
import "../index.css";

function Button({ active, setActive }) {
  return (
    <div className={active ? "parentBtn white-bgc" : "orange-bgc parentBtn"}>
      <button className="btn" onClick={() => setActive(true)}>
        Налоговый вычет
      </button>
    </div>
  );
}

export default Button;
