import React, { useState } from "react";

const UseStateCounter = () => {
  const [no, setNo] = useState(0);

  const delayedPlus = () => {
    setTimeout(() => {
      setNo((noo) => {
        return noo + 1;
      });
    }, 1000);
  };
  const minus = () => {
    setNo(no - 1);
  };
  const zero = () => {
    setNo(0);
  };

  return (
    <>
      {no}
      <button onClick={delayedPlus} className="btn">
        +delayedPlus
      </button>
      <button onClick={minus} className="btn">
        -
      </button>
      <button onClick={zero} className="btn">
        0
      </button>
    </>
  );
};

export default UseStateCounter;
