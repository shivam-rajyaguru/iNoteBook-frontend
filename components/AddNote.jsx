import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext";

const AddNote = () => {
  const contex = useContext(noteContext);
  const { addNote } = contex;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "General",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {" "}
      <h2 className="container">Add Note </h2>
      <div className="container my-4">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Enter title"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Enter description"
              onChange={onChange}
            />
          </div>
          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Enter Tag"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-primary my-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
