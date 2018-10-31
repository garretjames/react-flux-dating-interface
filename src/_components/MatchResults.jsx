import React from "react";

import { Jumbotron, Container, Alert, Row, Col } from "reactstrap";
import { MatchInfo } from "./MatchInfo";

export class MatchResults extends React.Component {
  render() {
    const { matches, numMatches } = this.props;
    return (
      <div>
        {matches.loading && <span>Loading matches...</span>}
        {matches.error && (
          <span className="text-danger">ERROR: {matches.error}</span>
        )}
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <div id={"searchResults"} data-id="searchResults">
                {matches && (
                  <div>
                    <h1 className="display-3">
                      <Alert data-id="resultTitle" color="success">
                        {numMatches} Candidates Found
                      </Alert>
                    </h1>

                    {matches.map((match, index) => (
                      <Col
                        key={match.id.value}
                        className={"match-result"}
                        data-id="resultItem"
                      >
                        <img
                          data-id="userPhoto"
                          className="photo"
                          src={match.picture.large}
                        />
                        <span data-id="userName" className="name lead">
                          <span>
                            <b>Name:</b>
                          </span>{" "}
                          {match.name.first} {match.name.last}
                        </span>
                        {"  "}
                        <span data-id="userAge" className="age lead">
                          <span>
                            <b>Age:</b>
                          </span>
                          {match.dob.age}
                        </span>
                        <br />
                        <MatchInfo userInfo={match} />
                      </Col>
                    ))}
                  </div>
                )}
              </div>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
