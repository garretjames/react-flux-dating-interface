import React from "react";

import { MatchFilter, MatchResults } from "./_components";
import MatchesStore from "./matches.store";
import AltContainer from "alt-container";
import MatchesActions from "./matches.actions";

import "./app.css";

export default class LonelyHeartsApp extends React.Component {
  static handleSubmitFilter(e) {
    e.preventDefault();
    const { initMatches } = MatchesStore.getState();
    const filterOpts = {
      ageMin: e.target.form.ageMin.value,
      ageMax: e.target.form.ageMax.value,
      gender: e.target.form.gender.value
    };
    MatchesActions.getFilteredMatches(initMatches, filterOpts);
  }
  static handleResetFilter() {
    MatchesActions.resetMatches();
  }
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="xt-iono">
            <AltContainer store={MatchesStore}>
              <MatchFilter
                handleSubmitFilter={LonelyHeartsApp.handleSubmitFilter}
                handleResetFilter={LonelyHeartsApp.handleResetFilter}
              />
            </AltContainer>
            <AltContainer store={MatchesStore} component={MatchResults} />
          </div>
        </div>
      </div>
    );
  }
}
