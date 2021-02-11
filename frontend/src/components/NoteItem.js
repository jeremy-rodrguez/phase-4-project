import React from "react";

const NoteItem = (props) => (
  <li onClick={() => props.handleClick(props)}>
    <h2>{props.notes.title}</h2>
    <p>{props.notes.body}</p>
  </li>
);

const truncate = (str) => {
  return str.length > 10 ? str.substring(0, 10) + "..." : str;
};

export default NoteItem;
