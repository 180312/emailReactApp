import React from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  componentDidUpdate() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.content}</p>
            <p className="right">
              Send On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href>Yes: {survey.yes}</a>
            <a href>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(
  mapStateToProps,
  {
    fetchSurveys
  }
)(SurveyList);
