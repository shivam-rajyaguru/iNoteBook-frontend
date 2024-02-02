import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://127.0.0.1:3000";

  const noteInit = [];
  const [notes, setNotes] = useState(noteInit);
  //Get Alll note
  //API Call
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application-json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjhiMDgxODQ3OGUxZTA2Mzc1ZjZmNiIsImlhdCI6MTcwNjYwNTI4MH0.yBT0UMjPZ__w1kcdGTvHh5d0dIhLSnSZ24ddGO3W4ws",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //Add note
  const addNote = async (title, description, tag) => {
    console.log("Adding note");
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application-json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjhiMDgxODQ3OGUxZTA2Mzc1ZjZmNiIsImlhdCI6MTcwNjYwNTI4MH0.yBT0UMjPZ__w1kcdGTvHh5d0dIhLSnSZ24ddGO3W4ws",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "65b9df23cff006cd8ad31f325",
      user: "65b8b0818478e1e06375f6f6",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-31T05:48:19.866Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  const deleteNote = (id) => {
    console.log("deleting note with id id:" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(
      `${host}/api/notes/updatenotes/65b9df23cff006cd8a31f325`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjhiMDgxODQ3OGUxZTA2Mzc1ZjZmNiIsImlhdCI6MTcwNjYwNTI4MH0.yBT0UMjPZ__w1kcdGTvHh5d0dIhLSnSZ24ddGO3W4ws",
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = await response.json();

    //logic to edit in client
    for (let index = 0; index < notes.length; i++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, updateNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
