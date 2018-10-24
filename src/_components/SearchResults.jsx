import React from "react";

import { Jumbotron, Container, Button, Alert, Row, Col } from "reactstrap";
import { UserInfo } from "./UserInfo";

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: {},
      numMatches: "4"
    };
  }
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 data-id="resultTitle" className="display-3">
              <Alert color="success">
                {this.state.numMatches} Candidates Found
              </Alert>
            </h1>
            <Row>
              <Col xs="6">
                <ul>
                  <li data-id="resultItem">
                    <img
                      data-id="userPhoto"
                      className="photo"
                      src="https://randomuser.me/api/portraits/women/95.jpg"
                    />
                    <span data-id="userName" className="name lead">
                      Martha Stewart
                    </span>
                    <span data-id="userAge" className="age lead">
                      28
                    </span>
                    <UserInfo />
                  </li>
                </ul>
              </Col>
              <Col xs="6">
                <ul>
                  <li data-id="resultItem">
                    <img
                      data-id="userPhoto"
                      className="photo"
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                    />
                    <span data-id="userName" className="name lead">
                      Donald J Trump
                    </span>
                    <span data-id="userAge" className="age lead">
                      70
                    </span>
                    <button data-id="userInfo">Contact</button>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
