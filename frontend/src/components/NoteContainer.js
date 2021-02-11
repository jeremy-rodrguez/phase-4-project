import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {

  state = {
    notes: [],
    selectedNote: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/notes");
    .then(response => response.json());
    .then(notes => this.setState({notes: json}));
  }

    handleClick = (notes) => {
    this.setState({selectedNote: notes.note})
  };

  render() {
    return (
      <Fragment>
        <Search />
        <div className="container">
          <Sidebar notes={this.state.notes} handleClick={this.handleClick}/>
          <Content selectedNote={this.state.selectedNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
