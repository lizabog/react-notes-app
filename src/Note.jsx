import React, { Component } from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBCardTitle,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

export default class Note extends Component {
  render() {
    const time = this.props.date.toLocaleString();
    const note = this.props.text;
    const title = this.props.title;
    return (
      <MDBCol md="4">
        <MDBCard
          background="secondary"
          className="text-white"
          style={{ maxWidth: "18rem" }}
        >
          <MDBCardHeader>
            <MDBBtn
              className="w-75 btn-sm mb-2"
              
              color="light"
              onClick={this.props.onDelete}
            >
              Remove
            </MDBBtn>
            {time}
          </MDBCardHeader>
          <MDBCardBody onClick={this.props.openModal}>
            {title ? <MDBCardTitle>{title}</MDBCardTitle> : ""}
            <MDBCardText>{note}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
