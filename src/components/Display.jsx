import React from "react";
import Segment from "./Segment";

function Display(props) {
  const numbers = [126, 48, 109, 121, 51, 91, 95, 112, 127, 123, 119, 103 ];
  const segments = ["G", "F", "E", "D", "C", "B", "A"];
  const bit = numbers[props.value];
  return (
    <div className="Display">
      {segments.map((seg, i) => {
        return (
          <Segment on={((bit >> i) & 1) == 1 ? true : false} position={seg} />
        );
      })
      }
    </div>
  );
}

export default Display;
