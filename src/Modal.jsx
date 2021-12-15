import React, { Component } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newNote: "",
    };
  }

  handleChangeTitle(event) {
    this.setState({ newTitle: event.target.value });
  }
  handleChangeNote(event) {
    this.setState({ newNote: event.target.value });
  }

  handleNoteEdit(event) {
    event.preventDefault();
    this.props.handleEdit(this.state, this.props.Id);
    this.props.closeModal();
  }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.setState({ newTitle: this.props.title })
    }
    if (this.props.note !== prevProps.note) {
      this.setState({ newNote: this.props.note })
    }

  }
  render() {
    return (
      <MDBModal show={this.props.show} staticBackdrop tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <form onSubmit={(event) => this.handleNoteEdit(event)}>
              <MDBModalHeader className="justify-content-center">
                <MDBModalTitle>
                  <MDBInput
                    value={this.state.newTitle}
                    onChange={(event) => this.handleChangeTitle(event)}
                    id="Title"
                    type="text"
                  />
                </MDBModalTitle>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBInput
                  onChange={(event) => this.handleChangeNote(event)}
                  value={this.state.newNote}
                  id="yourNote"
                  textarea
                  rows={3}
                />
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.props.closeModal}>
                  Close
                </MDBBtn>
                <MDBBtn type="submit" color="primary">
                  Save Changes
                </MDBBtn>
              </MDBModalFooter>
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    );
  }
}
