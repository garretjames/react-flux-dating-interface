import React from "react";

import { MatchFilter, MatchResults } from "./_components";
import MatchesStore from "./matches.store";
import AltContainer from "alt-container";
import MatchesActions from "./matches.actions";

import "./app.css";

//TODO possibly make this a stateless component
export class LonelyHeartsApp extends React.Component {
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmitFilter(e) {
        e.preventDefault();
        console.log(e.target);
        const { matches } = MatchesStore.getState();
        const filterOpts = {
            ageMin: e.target.form.ageMin.value,
            ageMax: e.target.form.ageMax.value,
            gender: e.target.form.gender.value
        }
        //console.log(matches);
        console.log(e.target.form.ageMax.value);
        MatchesActions
            .getFilteredMatches(matches, filterOpts)
            /*.then(res => {
                const newState = Object.assign({}, this.state, {
                    matches: res.results,
                    numMatches: res.info.results
                });
                this.setState(newState);
            })
            .catch(err => console.log(err));*/
    }
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="xt-iono">
            <AltContainer store={MatchesStore} >
                <MatchFilter handleSubmitFilter={this.handleSubmitFilter} />
            </AltContainer>
            <AltContainer store={MatchesStore} component={MatchResults} />
          </div>
        </div>
      </div>
    );
  }
}
