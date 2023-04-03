import React, { useState } from "react";

const Selection = ({applyColor}) => {
  const [backgroundColorStyle,setBackgroundColorStyle]=useState({background:""});
  return (
    <div
      className={"fix-box"}
      style={{
        background: {},
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: "5px",
        height: "300px",
        width: "300px",
        textAlign: "center",
        color: "white",
        backgroundColor:backgroundColorStyle.background
      }}
      onClick={()=>applyColor(setBackgroundColorStyle)}
    >
      <h3>Selection</h3>
    </div>
  );
};

export default Selection;
