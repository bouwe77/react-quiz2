import React from "react";

export default ({ choice, choose, disabled }) => (
  <div>
    <button disabled={disabled} className="choice" onClick={() => choose(choice)}>
      {choice}
    </button>
  </div>
);
