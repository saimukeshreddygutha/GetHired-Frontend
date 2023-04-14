import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addJobAd } from "./api/JobPortalAPIService";
import { useAuth } from "./security/AuthContext";

function JobAdForm() {
  const authContext = useAuth();
  const username = authContext.username;
  const userId = authContext.userId;
  const [isAdded, setAdded] = useState(false);
  async function onSubmit(values) {
    const job = {
      recruiterId: userId,
      companyName: values.companyName,
      description: values.description,
      roleName: values.roleName,
      location: values.location,
      packageDetails: values.packageDetails,
      experienceRequired: values.experienceRequired,
      skillsRequired: values.skillsRequired,
      recruiterUsername: username,
    };

    await addJobAd(username, job)
      .then((response) => {
        if (response.status == 201) setAdded(true);
      })
      .catch((error) => console.log(error));
  }
  function validate(values) {}
  return (
    <div className="container p-5 w-75">
      <h1>Post a Job Ad to hire the best talent</h1>
      <hr className="border border-primary border-3 opacity-75"></hr>
      {isAdded && (
        <div className="alert alert-success">Your JobAd is Added!</div>
      )}
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
                <label className="form-label">Company Name*</label>
                <Field
                  type="text"
                  className="form-control"
                  name="companyName"
                />
              </fieldset>

              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="roleName"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Title of the Role*</label>
                <Field type="text" className="form-control" name="roleName" />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Description*</label>
                <Field name="description" component={MultilineTextInput} />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="location"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Location*</label>
                <Field type="text" className="form-control" name="location" />
              </fieldset>

              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="packageDetails"
                  component="div"
                  className="alert alert-warning"
                />

                <label className="form-label">Package Details*</label>
                <Field name="packageDetails" component={MultilineTextInput} />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="experienceRequired"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Experience Required*</label>
                <Field
                  name="experienceRequired"
                  component={MultilineTextInput}
                />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="skillsRequired"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Skills Required*</label>
                <Field name="skillsRequired" component={MultilineTextInput} />
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

function MultilineTextInput(props) {
  return (
    <textarea
      {...props.field}
      className="form-control"
      name={props.field.name}
      type="text"
      rows="5"
      wrap="soft"
    />
  );
}
export default JobAdForm;
