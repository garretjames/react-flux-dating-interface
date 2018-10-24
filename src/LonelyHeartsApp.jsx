import React from "react";

import { SearchFilter, SearchResults, UserInfo } from "./_components";

import "./app.css";

export class LonelyHeartsApp extends React.Component {
  render() {
    //const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="xt-iono">
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <SearchFilter />
            <SearchResults />
          </div>
        </div>
      </div>
    );
  }
}
