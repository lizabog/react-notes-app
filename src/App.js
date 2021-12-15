import React, { Component } from "react";
import "./App.css";
import NoteEditor from "./NoteEditor";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";
import NoteGrid from "./NoteGrid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      show: false,
      currentNote: { newTitle: "", newNote: "" },
      currentId: 0,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleNoteDelete(note) {
    if (window.confirm("Are You Sure?")) {
      this.setState({ show: false });
      const noteId = note.id;
      const newNotes = this.state.notes.filter(function (note) {
        return note.id !== noteId;
      });
      this.setState({ notes: newNotes });
    }
  }

  handleAddNotes(newNote) {
    const newestNote = { note: { ...newNote }, date: new Date(), id: uuidv4() };
    this.setState((prevState) => {
      return { notes: [...prevState.notes, { ...newestNote }] };
    });
  }
  handleEdit(noteToEdit, id) {
    const checkid = id.id;
    const updatedNote = {
      note: { ...noteToEdit },
      date: new Date(),
      id: { checkid },
    };

    const newNotes = this.state.notes.map((note) => {
      if (note.id !== checkid) {
        return note;
      } else {
        return (note = { ...updatedNote });
      }
    });

    this.setState({ notes: newNotes });
  }

  showModal = (item, id) => {
    this.setState({ show: true });
    this.setState({ currentNote: { ...item.note } });
    this.setState({ currentId: { id } });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App d-flex flex-column align-items-center p-4 h-100">
        <NoteEditor addNote={this.handleAddNotes.bind(this)} />
        <NoteGrid
          notes={this.state.notes}
          onNoteDelete={this.handleNoteDelete.bind(this)}
          openModal={this.showModal}
        />
        <Modal
          show={this.state.show}
          closeModal={this.hideModal}
          title={this.state.currentNote.newTitle}
          note={this.state.currentNote.newNote}
          Id={this.state.currentId}
          handleEdit={this.handleEdit.bind(this)}
        />
      </div>
    );
  }
}
