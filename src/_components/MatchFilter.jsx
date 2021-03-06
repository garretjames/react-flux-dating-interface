import React from "react";
import { Button, Label, Input, FormGroup, Form } from "reactstrap";

export class MatchFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageMin: "0",
      ageMax: "99",
      gender: "",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { ageMin, ageMax, gender, submitted } = this.state;
    return (
      <div data-id="userPreferences" id="userPreferences">
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
            {"   "}
            <span>To</span>
            {"   "}
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
              value={"any"}
              onChange={this.handleChange}
              checked
            />
            <Label>
              {" "}
              <span>Any</span>
            </Label>
            <Input
              type="radio"
              name="gender"
              data-id="genderMale"
              value={"male"}
            />{" "}
            <Label>
              <span>Male</span>
            </Label>
            <Input
              type="radio"
              name="gender"
              data-id="genderFemale"
              value={"female"}
            />{" "}
            <Label check>
              <span>Female</span>
            </Label>
          </FormGroup>
          <Button
            type={"button"}
            color="danger"
            id={"filter-btn"}
            onClick={this.props.handleResetFilter}
            data-id={"buttonReset"}
          >
            Reset
          </Button>{" "}
          <Button
            type={"submit"}
            color="primary"
            onClick={this.props.handleSubmitFilter}
            data-id={"buttonFilter"}
          >
            Filter
          </Button>
        </Form>
      </div>
    );
  }
}
