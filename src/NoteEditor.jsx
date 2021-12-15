import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBBtn, MDBInput } from "mdb-react-ui-kit";

export default class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newNote: "",
    };
  }
  handleChangeNote(event) {
    this.setState({ newNote: event.target.value });
  }

  handleChangeTitle(event) {
    this.setState({ newTitle: event.target.value });
  }

  handleNoteAdd(event) {
    const { addNote } = this.props;
    event.preventDefault();
    addNote(this.state);
    this.setState({ newTitle: "", newNote: "" });
  }

  render() {
    const { newTitle, newNote } = this.state;

    return (
      <MDBCard className="w-50">
        <MDBCardBody>
          <form
            className="d-flex flex-column justify-content-between"
            onSubmit={(event) => this.handleNoteAdd(event)}
          >
            <MDBInput
              value={newTitle}
              onChange={(event) => this.handleChangeTitle(event)}
              label="Optional Title"
              id="Title"
              type="text"
            />

            <MDBInput
              value={newNote}
              onChange={(event) => this.handleChangeNote(event)}
              label="Your note..."
              id="yourNote"
              textarea
              rows={3}
            />
            <MDBBtn type="submit" className="my-2" color="secondary" size="sm">
              Take Note
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
