import React from "react";

function Colors({ color }) {
  let changeBG = () => {
    document.body.style.background = color;
  }

  const textColor = color === "black" || color === "blue" || color === "olive" || color === "green" ? "white" : "black";

  return (
    <button
      style={{ background: color, color: textColor }} className={`h-[35px] rounded-[150px] min-w-[70px] text-center bg-black px-10 m-1`} onClick={changeBG}>{color.toUpperCase()}</button>
  );
}

export default Colors;