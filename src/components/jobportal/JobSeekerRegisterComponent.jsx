import { Formik, Form, Field, ErrorMessage } from "formik";
import { addJobseekerApi, addUserApi } from "./api/JobPortalAPIService";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function JobSeekerRegisterComponent() {
  const [isRegistered, setRegistered] = useState(false);
  const onSubmit = (values) => {
    let jobseeker = {
      name: values.name,
      age: values.age,
      email: values.email,
      gender: values.gender,
      dateOfBirth: values.dob,
      location: values.location,
    };

    let user = {
      username: values.username,
      password: values.password,
      roles: ["JOBSEEKER"],
    };
    console.log(jobseeker);
    console.log(user);
    const jobseekerAdded = true;
    const usercreated = true;

    // addUserApi(user)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status == 204) usercreated = true;
    //   })
    //   .catch((error) => console.log(error));

    // addJobseekerApi(jobseeker)
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status == 201) jobseekerAdded = true;
    //   })
    //   .catch((error) => console.log(error));

    if (jobseekerAdded && usercreated) setRegistered(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Full Name is required";
    }
    if (!values.age) {
      errors.age = "Age is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    if (!values.dob) {
      errors.dob = "Date of birth is required";
    }
    if (!values.location) {
      errors.location = "Location is required";
    }
    if (!values.username) {
      errors.username = "A valid Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="container p-5 w-75">
      <h1>Fill the following form to Register with GetHired.in</h1>
      <hr className="border border-primary border-3 opacity-75"></hr>
      <div>
        <Formik
          initialValues={{
            name: "",
            age: "",
            email: "",
            gender: "",
            dob: "",
            location: "",
            username: "",
            password: "",
            resumeLink: "",
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
                  name="name"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Full Name*</label>
                <Field type="text" className="form-control" name="name" />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="age"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Age*</label>
                <Field type="number" className="form-control" name="age" />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Email*</label>
                <Field type="text" className="form-control" name="email" />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Gender*</label>
                <Field
                  className="form-control"
                  as="select"
                  id="gender"
                  name="gender"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
              </fieldset>

              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Date of Birth*</label>
                <Field type="date" className="form-control" name="dob" />
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
                  name="resumeLink"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Resume Link*</label>
                <Field type="text" className="form-control" name="resumeLink" />
              </fieldset>
              <hr className="border border-success border-3 opacity-75"></hr>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-warning"
                />

                <label className="form-label">Username*</label>
                <Field type="text" className="form-control" name="username" />
              </fieldset>
              <fieldset className="form-group p-3">
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-warning"
                />
                <label className="form-label">Password*</label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                />
              </fieldset>

              {!isRegistered && (
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Create Account
                </button>
              )}
              {isRegistered && (
                <fieldset className="form-group p-3">
                  <div className="alert alert-success form-group">
                    <span className="p-5">
                      Account registeration successful!
                    </span>
                    <Link to="/jobseeker/login" className="btn btn-primary">
                      Login Here!
                    </Link>
                  </div>
                </fieldset>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
