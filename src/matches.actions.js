import { altUtils as alt } from "./alt.utils";

const BASE_URL = "https://randomuser.me/api/?";
const INIT_PARAMS =
  "inc=id,gender,name,picture,phone,cell,email,dob&nat=US&results=10&seed=initMatches";

class MatchesActions {
  getInitMatches() {
    return dispatch => {
      const requestOptions = {
        method: "GET"
      };

      return fetch(`${BASE_URL}${INIT_PARAMS}`, requestOptions).then(res => {
        return res.text().then(text => {
          const data = text && JSON.parse(text);
          if (!res.ok) {
            const error = (data && data.message) || res.statusText;
            return this.matchesFailed(error);
          }
          dispatch(data.results);
        });
      });
    };
  }

  matchesFailed(errMsg) {
    return errMsg;
  }

  getFilteredMatches(res, opts) {
    let filteredResults = [];
    return dispatch => {
      res.map(match => {
        if (match.dob.age < opts.ageMin || match.dob.age > opts.ageMax) {
        } else {
          if (opts.gender === "any" || opts.gender === match.gender)
            filteredResults.push(match);
        }
      });
      dispatch(filteredResults);
    };
  }

  resetMatches() {
    return dispatch => dispatch();
  }
}

export default alt.createActions(MatchesActions);
