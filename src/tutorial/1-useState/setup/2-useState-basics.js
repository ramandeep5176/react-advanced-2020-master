import React, { useState } from "react";

const UseStateBasics = () => {
  const [change, setChange] = useState(`delete all dynamic`);

  const [neww, setNeww] = useState(data);
  const click = (id) => {
    let newww = neww.filter((whole) => whole.id !== id);
    setNeww(newww);
  };
  const click2 = () => {
    setNeww([]);
    setChange(`NOthing TO SEe`);
  };
  // use state
  return (
    <>
      {neww.map((whole) => {
        const { id, pic, name, job, info } = whole;
        return (
          <>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <h4>{job}</h4>
            <p>{info}</p>
            <img style={{ height: "100px" }} src={pic} />
            <button
              onClick={() => {
                click(id);
              }}
              className="btn"
            >
              delete
            </button>
          </>
        );
      })}
      <button onClick={click2} className="btn">
        {change}
      </button>
    </>
  );
};
export default UseStateBasics;

const data = [
  {
    id: 1,
    pic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "ram1",
    job: "web1",
    info: "#$1 #uwrhgfiuhrhfk bwiry iryhiuf iwuhiure fir igrh ih",
  },
  {
    id: 2,
    pic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "ram2",
    job: "web2",
    info: "#$2 #uwrhgfiuhrhfk bwirydi laudantium consequatur expedita asperioresolestias magndi laudantium consequatur expedita asperioresolestias magndi laudantium consequatur expedita asperioresolestias magndi laudantium consequatur expedita asperioresolestias magn iryhiuf iwuhiure fir igrh ih",
  },
  {
    id: 3,
    pic: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "ram3",
    job: "web3",
    info: "#$3 di laudantium consequatur expedita asperioresolestias magn di laudantium consequatur expedita asperioresolestias magn #uwrhgfiuhrhfk bwiry iryhiuf iwuhiure fir igrh ih",
  },
];
