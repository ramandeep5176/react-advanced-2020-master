import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const lee = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", lee);
  }, []);
  return (
    <h2>
      {size}e {console.log(size)};{" "}
    </h2>
  );
};

export default UseEffectCleanup;
