import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Shivam",
    class: "12",
  };
  const [state, setstate] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setstate({
        name: "Jay",
        class: "1st Year IT",
      });
    }, 5000);
  };
  return (
    <NoteContext.Provider value={{ state: state, update: update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
