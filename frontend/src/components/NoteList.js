import React from "react";
import NoteItem from "./NoteItem";

const NoteList = (props) => {
  return (
    <ul>
      {/* Render list of notes here... */}
      props.notes.map(note =>{" "}
      <NoteItem note={note} handleClick={props.handleClick} />)
      <NoteItem />
    </ul>
  );
};

export default NoteList;
