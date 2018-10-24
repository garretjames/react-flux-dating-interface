import React from "react";

import { Button, Label, Input, FormGroup, Form, Badge } from "reactstrap";

export class SearchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageMin: "",
      ageMax: "",
      gender: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("click success");

    this.setState({ submitted: true });
    const { ageMin, ageMax, gender } = this.state;
    const { dispatch } = this.props;
    if (ageMin && ageMax) {
      //dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { ageMin, ageMax, submitted } = this.state;
    return (
      <div id="userPreferences">
        <legend className="control-label">
          <h2>Search Criteria</h2>
        </legend>
        <Form>
          <FormGroup className={"form-group"}>
            <legend className="control-label">Age</legend>
            <Input
              type="text"
              className="age-filter-input"
              name="ageMin"
              data-id="ageMin"
              placeholder={"Minimum Age"}
              value={ageMin}
              onChange={this.handleChange}
            />
            <span>to</span>
            <Input
              type="text"
              className="age-filter-input"
              name="ageMax"
              data-id="ageMax"
              placeholder={"Maximum Age"}
              value={ageMax}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup check className={"form-group"} tag="fieldset">
            <legend className="control-label">Gender</legend>
            <Input
              type="radio"
              name="gender"
              data-id="genderAny"
              onChange={this.handleChange}
              checked
            />
            <Label>
              {" "}
              <span>Any</span>
            </Label>
            <Input type="radio" name="gender" data-id="genderMale" />{" "}
            <Label>
              <span>Male</span>
            </Label>
            <Input type="radio" name="gender" data-id="genderFemale" />{" "}
            <Label check>
              <span>Female</span>
            </Label>
          </FormGroup>
          <Button type={"button"} color="danger" data-id={"buttonReset"}>
            Reset
          </Button>{" "}
          <Button
            type={"submit"}
            color="primary"
            onClick={this.handleSubmit}
            data-id={"buttonFilter"}
          >
            Filter
          </Button>
        </Form>
      </div>
    );
  }
}
