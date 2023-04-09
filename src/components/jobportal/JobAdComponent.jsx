import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";

function JobAdComponent() {
  function onSubmit(values) {
    console.log(values);
  }
  function validate(values) {
    console.log(values);
  }
  return (
    <div className="container p-5 w-75">
      <h1>Post a Job Ad to hire the best talent</h1>
      <hr className="border border-primary border-3 opacity-75"></hr>
      <div>
        <Formik
          initialValues={{
            recruiterId: "",
            companyName: "",
            description: "",
            roleName: "",
            location: "",
            packageDetails: "",
            experienceRequired: "",
            skillsRequired: "",
            recruiterUsername: "",
          }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({ isSubmitting }) => (
            <Form>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Company Name</label>
                <Field
                  type="text"
                  className="form-control"
                  name="companyName"
                />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="roleName"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Title of the Role</label>
                <Field type="text" className="form-control" name="roleName" />
              </fieldset>

              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="location"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Location</label>
                <Field type="text" className="form-control" name="location" />
              </fieldset>

              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="packageDetails"
                  component="div"
                  className="alert alert-warning"
                />

                <label className="form-label">Package Details</label>
                <Field
                  type="text"
                  className="form-control"
                  name="packageDetails"
                />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="experienceRequired"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Experience Required</label>
                <Field
                  type="text"
                  className="form-control"
                  name="experienceRequired"
                />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="skillsRequired"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Skills Required</label>
                <Field
                  type="text"
                  className="form-control"
                  name="skillsRequired"
                />
              </fieldset>

              <button
                className="btn btn-success"
                type="submit"
                disabled={isSubmitting}
              >
                Post Job
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default JobAdComponent;
