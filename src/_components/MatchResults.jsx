import React from "react";

import { Jumbotron, Container, Alert, Row, Col } from "reactstrap";
import { MatchInfo } from "./MatchInfo";

export class MatchResults extends React.Component {
  render() {
    const { matches } = this.props;
    const { numMatches } = this.props;
    return (
      <div>
        {matches.loading && <span>Loading matches...</span>}
        {matches.error && (
          <span className="text-danger">ERROR: {matches.error}</span>
        )}
        <Jumbotron fluid>
          <Container fluid>
            <Row>
              <div data-id="searchResults">
                {matches && (
                  <div>
                    <h1 data-id="resultTitle" className="display-3">
                      <Alert color="success">
                        {numMatches} Candidates Found
                      </Alert>
                    </h1>

                        {matches.map((match, index) => (
                      <Col key={match.id.value} data-id="resultItem">
                        <img
                          data-id="userPhoto"
                          className="photo"
                          src={match.picture.large}
                        />
                        <span data-id="userName" className="name lead">
                          {match.name.first} {match.name.last}
                        </span>
                        <span data-id="userAge" className="age lead">
                          {match.dob.age}
                        </span>
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
