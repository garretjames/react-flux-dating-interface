import { altUtils as alt } from "./alt.utils";
import MatchesActions from "./matches.actions";

class MatchesStore {
  constructor() {
    this.initMatches = [];
    this.matches = [];
    this.numMatches = 0;
    this.errMsg = null;

    this.on("init", () => {
      MatchesActions.getInitMatches();
    });

    this.bindListeners({
      handleGetInitMatches: MatchesActions.GET_INIT_MATCHES,
      handleGetFilteredMatches: MatchesActions.GET_FILTERED_MATCHES,
      handleResetMatches: MatchesActions.RESET_MATCHES,
      handleMatchesFailed: MatchesActions.MATCHES_FAILED
    });
  }

  handleGetInitMatches(initMatches) {
    console.log("handleGetInit was called");
    this.initMatches = initMatches;
    this.matches = initMatches;
    this.numMatches = initMatches.length;
    this.errMsg = null;
  }

  handleGetFilteredMatches(matches) {
    console.log("handleGetFiltered was called");
    this.matches = matches;
    this.numMatches = matches.length;
    this.errMsg = null;
  }

  handleResetMatches() {
    console.log("handleReset was called");
    this.matches = this.initMatches;
    this.numMatches = this.initMatches.length;
    this.errMsg = null;
  }

  handleMatchesFailed(errMsg) {
    this.errMsg = errMsg;
  }
}

export default alt.createStore(MatchesStore, "MatchesStore");
