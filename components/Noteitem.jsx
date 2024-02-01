import React, { useContext } from "react";
import noteContext from "../context/noteContext";

const Noteitem = (props) => {
  const contex = useContext(noteContext);
  const { deleteNote } = contex;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-centers">
            <h5 className="card-title">{note.title}</h5>
            <div className="mx-2">
              <i
                className="far fa-trash-alt mx-2 my-1"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteNote(note._id);
                }}
              ></i>
              <i
                className="far fa-edit mx-2 my-1"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
