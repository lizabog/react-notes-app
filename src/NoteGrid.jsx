import React, { Component } from "react";
import Note from "./Note";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default class NoteGrid extends Component {

  noteCreate = () =>
    this.props.notes.map((item) => {
      return (
        <Note
          openModal={this.props.openModal.bind(null, item,item.id)}
          onDelete={this.props.onNoteDelete.bind(null, item)}
          key={item.id}
          date={item.date}
          text={item.note.newNote}
          title={item.note.newTitle}
        />
      );
    });

  render() {
    return (
      <MDBContainer className="my-5">
        <MDBRow className="gy-5">{this.noteCreate()}</MDBRow>
      </MDBContainer>
    );
  }
}
