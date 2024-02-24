import React from "react";

const TimerButton = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

export default TimerButton;
