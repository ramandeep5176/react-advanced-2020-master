import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [ram, setRam] = useState("0");
  const click = () => {
    setRam(ram - 2);
  };
  useEffect(() => {
    console.log(`r`);
  }, []);
  console.log(`er`);

  return (
    <>
      <h2>{ram}</h2>
      <button onClick={click} className="btn">
        btn
      </button>
    </>
  );
};

export default UseEffectBasics;
