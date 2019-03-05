import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(App);
