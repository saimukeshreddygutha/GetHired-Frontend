import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  addJobseekerApi,
  addUserApi,
  isUsernameAlreadyExists,
  usernameApi,
} from "./api/JobPortalAPIService";

import student from "../images/student.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function JobSeekerRegisterComponent() {
  const [isRegistered, setRegistered] = useState(false);
  const [usernameAlreadyExists, setUsernameAlreadyExists] = useState(false);

  async function isUsernameAlreadyExists(username) {
    try {
      const response = await usernameApi(username);
      console.log(response.status);
      return false;
    } catch (error) {
      console.log(error);
      return true;
    }
  }
  async function onSubmit(values) {
    if (await isUsernameAlreadyExists(values.username)) {
      setUsernameAlreadyExists(true);
    } else {
      setUsernameAlreadyExists(false);
      let jobseeker = {
        name: values.name,
        age: values.age,
        email: values.email,
        gender: values.gender,
        dateOfBirth: values.dob,
        location: values.location,
        resumeLink: values.resumeLink,
        username: values.username,
      };

      let user = {
        username: values.username,
        password: values.password,
        roles: ["JOBSEEKER"],
      };
      console.log(jobseeker);
      console.log(user);
      let jobseekerAdded = false;
      let usercreated = false;

      await addUserApi(user)
        .then((response) => {
          console.log(response);
          if (response.status == 201) usercreated = true;
        })
        .catch((error) => console.log(error));

      console.log(usercreated);

      if (usercreated)
        await addJobseekerApi(jobseeker)
          .then((response) => {
            console.log(response);
            if (response.status == 201) jobseekerAdded = true;
          })
          .catch((error) => console.log(error));

      if (jobseekerAdded && usercreated) setRegistered(true);
    }
  }

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
    if (!values.username) errors.username = "Username cannot be empty!";

    if (values.password.length < 8)
      errors.password = "Password must contain atleast 8 characters!";
    if (values.password != values.confirmPassword)
      errors.confirmPassword = "Passwords do not match!";

    if (!values.resumeLink)
      errors.resumeLink =
        "Public access link to your resume to be attached here.";

    return errors;
  };

  return (
    <div className="jobseeker-reg py-5">
      <div className="container p-5 w-75 shadow-lg reg-form">
        <div className="row">
          <div className="col-1">
            <img src={student} className="reg-form-logo" />
          </div>
          <div className="col">
            <h1 className="center">
              Fill the following form to Register with GetHired.ai as a
              Jobseeker
            </h1>
          </div>
        </div>
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
              confirmPassword: "",
            }}
            enableReinitialize={true}
            onSubmit={onSubmit}
            validate={validate}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="row">
                  <div className="col">
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Full Name*</label>
                      <Field type="text" className="form-control" name="name" />
                    </fieldset>
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="age"
                        component="div"
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Age*</label>
                      <Field
                        type="number"
                        className="form-control"
                        name="age"
                      />
                    </fieldset>
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Email*</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="email"
                      />
                    </fieldset>
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="alert alert-warning text-center"
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
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Date of Birth*</label>
                      <Field type="date" className="form-control" name="dob" />
                    </fieldset>
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="location"
                        component="div"
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Location*</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="location"
                      />
                    </fieldset>
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="resumeLink"
                        component="div"
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Resume Link*</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="resumeLink"
                      />
                    </fieldset>
                  </div>
                  <div className="col">
                    <fieldset className="form-group p-3">
                      {usernameAlreadyExists && (
                        <div className="alert alert-warning text-center">
                          Username Already Taken
                        </div>
                      )}
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="alert alert-warning text-center"
                      />

                      <label className="form-label">Username*</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="username"
                      />
                    </fieldset>
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Password*</label>
                      <Field
                        type="password"
                        className="form-control"
                        name="password"
                      />
                    </fieldset>
                    <fieldset className="form-group p-3">
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="alert alert-warning text-center"
                      />
                      <label className="form-label">Confirm Password*</label>
                      <Field
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                      />
                    </fieldset>

                    {!isRegistered && (
                      <div className="text-center">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Create Account
                        </button>
                      </div>
                    )}
                    {isRegistered && (
                      <fieldset className="form-group p-3">
                        <div className="alert alert-success form-group text-center">
                          <span className="p-5">
                            Account registeration successful!
                          </span>
                          <Link
                            to="/jobseeker/login"
                            className="btn btn-primary"
                          >
                            Login Here!
                          </Link>
                        </div>
                      </fieldset>
                    )}
                  </div>
                </div>

                <hr className="border border-success border-3 opacity-75"></hr>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
