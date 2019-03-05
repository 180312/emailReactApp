import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends React.Component {
  renderFields() {
    return (
      <div>
        {formFields.map(({ label, name }) => {
          return (
            <Field
              key={name}
              name={name}
              label={label}
              type="text"
              component={SurveyField}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            className="blue btn-flat right white-text"
            type="submit"
            name="action"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.subject) {
    errors.subject = "You must provide a subject";
  }
  if (!values.body) {
    errors.body = "You must provide a some content";
  }

  if (!values.recipients) {
    errors.recipients = "You must provide at least one email";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
