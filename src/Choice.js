import React from "react";

export default ({ choice, choose, disabled }) => (
  <div>
    <button disabled={disabled} className="choice" onClick={() => choose(choice.id)}>
      {choice.answer}
    </button>
  </div>
);
