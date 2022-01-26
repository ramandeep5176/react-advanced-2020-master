import React, { useState } from "react";

const UseStateBasics = () => {
  const [neww, setNeww] = React.useState(data);
  const click = (id) => {
    let newNeww = neww.filter((no) => no.id !== id);
    const ll = setNeww(newNeww);
  };
  const click2 = () => {
    setNeww([]);

    //
  };

  return (
    <>
      {neww.map((no) => {
        const { id, pic, name, job, info } = no;
        // return console.log(no);
        return (
          <div key={id}>
            {/* <h3>{id}</h3> */}
            <img style={{ height: "100px" }} src={pic} />
            <h3>{name}</h3>
            <h4>{job}</h4>
            <p>{info}</p>
            <button onClick={() => click(id)} className="btn">
              btn
            </button>
          </div>
        );
      })}
      <button onClick={click2} className="btn">
        all
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
