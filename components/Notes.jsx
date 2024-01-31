import React, { useContext } from "react";
import noteContext from "../context/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container">
      <h2>Your Note :</h2>
      <div className="row my-3">
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
