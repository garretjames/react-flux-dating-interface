import React from "react";
import ReactModal from "react-modal";
import { Badge, Button, ListGroup, ListGroupItem } from "reactstrap";

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

export class MatchInfo extends React.Component {
  constructor(props) {
    super(props);
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
        <Button
          color={"info"}
          onClick={this.handleOpenModal}
          data-id={"userInfo"}
        >
          Contact Info
        </Button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Match Info"
          style={customStyles}
        >
          <Button
            className={"modal-close"}
            outline
            color={"danger"}
            onClick={this.handleCloseModal}
          >
            X
          </Button>
          <br />
          <br />
          <ListGroup>
            <div data-id="userDialog">
              <ListGroupItem color="info">
                <span data-id="userPhone">
                  <Badge>Phone #:</Badge>
                  {"     "}
                  {this.props.userInfo.phone}
                </span>
              </ListGroupItem>
              <ListGroupItem color="info">
                <span data-id="userCell">
                  <Badge>Cell #:</Badge>
                  {"     "}
                  {this.props.userInfo.cell}
                </span>
              </ListGroupItem>
              <ListGroupItem color="info">
                <span data-id="userEmail">
                  <Badge>Email:</Badge>
                  {"     "}
                  {this.props.userInfo.email}
                </span>
              </ListGroupItem>
            </div>
          </ListGroup>
        </ReactModal>
      </div>
    );
  }
}
