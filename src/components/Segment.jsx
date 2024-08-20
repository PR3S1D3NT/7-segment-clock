import React from "react";

const Segment = (props) => {
  return (
    <div
      className={`Segment Segment-${props.position} ${props.on ? "Segment--on" : ""}`}
    ></div>
  );
};

export default Segment;
