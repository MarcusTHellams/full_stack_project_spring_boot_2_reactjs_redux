import React, { Component } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import FieldErrorComponent from './field-error.component';

const ProjectSchema = Yup.object().shape({
  projectName: Yup.string()
    .trim()
    .required("Project name is required"),
  description: Yup.string()
    .trim()
    .required("Description is required"),
  start_date: Yup.string().trim().required()
});

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.theForm = React.createRef();
  }

  componentDidMount() {
    console.log(this.theForm.current);
  }

  onSubmit = (values, actions) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Project form</h5>
              <hr />
              <Formik
                ref={this.theForm}
                onSubmit={this.onSubmit}
                validationSchema={ProjectSchema}
              >
                {({ errors, touched, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <Field
                        className="form-control form-control-lg "
                        placeholder="Project Name"
                        name="projectName"
                      />
                      <FieldErrorComponent field={errors.projectName} />
                    </div>
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Unique Project ID"
                        name="projectIdentifier"
                      />
                      {errors.description && (
                        <small className="form-text text-danger">
                          {errors.description}
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <Field
                        component="textarea"
                        className="form-control form-control-lg"
                        placeholder="Project Description"
                        name="description"
                      />
                    </div>
                    <h6>Start Date</h6>
                    <div className="form-group">
                      <Field
                        type="date"
                        className="form-control form-control-lg"
                        name="start_date"
                      />
                    </div>
                    <h6>Estimated End Date</h6>
                    <div className="form-group">
                      <Field
                        type="date"
                        className="form-control form-control-lg"
                        name="end_date"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
