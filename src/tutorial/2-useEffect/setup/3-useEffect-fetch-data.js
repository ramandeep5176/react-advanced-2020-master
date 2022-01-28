import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [data, setData] = useState([]);

  const get = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };
  console.log(data);

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <h1>r</h1>
      {/* logic */}

      {data.map((newData) => {
        const { login, id, avatar_url } = newData;
        return (
          <span key={id}>
            <span>
              <img
                style={{
                  borderRadius: "70px",
                  height: "200px",
                  display: "inline-block",
                }}
                src={avatar_url}
              />
              <h3 style={{ display: "inline-block" }}>{login}</h3>
            </span>
          </span>
        );
      })}

      {/* logic end */}
    </>
  );
};

export default UseEffectFetchData;
