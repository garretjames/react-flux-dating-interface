import React from "react";
import ReactModal from "react-modal";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Button color={"info"} onClick={this.handleOpenModal}>
          Contact
        </Button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Match Info"
          style={customStyles}
        >
          <Button
            className={""}
            outline
            color={"danger"}
            onClick={this.handleCloseModal}
          >
            X
          </Button>
          <div data-id="userDialog">
            <span data-id="userPhone" />
            <span data-id="userCell" />
            <span data-id="userEmail" />
          </div>
          <br />
          <ListGroup>
            <ListGroupItem color="success">Cras justo odio</ListGroupItem>
            <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
            <ListGroupItem color="danger">
              Porta ac consectetur ac
            </ListGroupItem>
          </ListGroup>
        </ReactModal>
      </div>
    );
  }
}
