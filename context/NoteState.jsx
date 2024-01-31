import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const noteInit = [
    {
      _id: "65b8c009189f8027d56d0f0f",
      user: "65b8b0818478e1e06375f6f6",
      title: "updated title",
      description: "this is a description",
      tag: "general tag",
      date: "2024-01-30T09:23:21.670Z",
      __v: 0,
    },
    {
      _id: "65b8c00c189f8027d56d0f13",
      user: "65b8b0818478e1e06375f6f6",
      title: "this is title",
      description: "this is a description",
      tag: "general tag",
      date: "2024-01-30T09:23:24.900Z",
      __v: 0,
    },
    {
      _id: "65b9df23cff006cd8a31f325",
      user: "65b8b0818478e1e06375f6f6",
      title: "31st Party 1",
      description: "ready for going to club tonight",
      tag: "party",
      date: "2024-01-31T05:48:19.866Z",
      __v: 0,
    },
    // {
    //   _id: "65b8c009189f8027d56d0f0f",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "updated title",
    //   description: "this is a description",
    //   tag: "general tag",
    //   date: "2024-01-30T09:23:21.670Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b8c00c189f8027d56d0f13",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "this is title",
    //   description: "this is a description",
    //   tag: "general tag",
    //   date: "2024-01-30T09:23:24.900Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b9df23cff006cd8a31f325",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "31st Party 1",
    //   description: "ready for going to club tonight",
    //   tag: "party",
    //   date: "2024-01-31T05:48:19.866Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b8c009189f8027d56d0f0f",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "updated title",
    //   description: "this is a description",
    //   tag: "general tag",
    //   date: "2024-01-30T09:23:21.670Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b8c00c189f8027d56d0f13",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "this is title",
    //   description: "this is a description",
    //   tag: "general tag",
    //   date: "2024-01-30T09:23:24.900Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b9df23cff006cd8a31f325",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "31st Party 1",
    //   description: "ready for going to club tonight",
    //   tag: "party",
    //   date: "2024-01-31T05:48:19.866Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b8c009189f8027d56d0f0f",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "updated title",
    //   description: "this is a description",
    //   tag: "general tag",
    //   date: "2024-01-30T09:23:21.670Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b8c00c189f8027d56d0f13",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "this is title",
    //   description: "this is a description",
    //   tag: "general tag",
    //   date: "2024-01-30T09:23:24.900Z",
    //   __v: 0,
    // },
    // {
    //   _id: "65b9df23cff006cd8a31f325",
    //   user: "65b8b0818478e1e06375f6f6",
    //   title: "31st Party 1",
    //   description: "ready for going to club tonight",
    //   tag: "party",
    //   date: "2024-01-31T05:48:19.866Z",
    //   __v: 0,
    // },
  ];
  const [notes, setNotes] = useState(noteInit);

  // const update = () => {
  //   setTimeout(() => {
  //     setstate({
  //       name: "Jay",
  //       class: "1st Year IT",
  //     });
  //   }, 5000);
  // };
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
