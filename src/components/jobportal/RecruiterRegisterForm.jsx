import { Formik, Form, Field, ErrorMessage } from "formik";
import { addUserApi, usernameApi } from "./api/JobPortalAPIService";
import { useState } from "react";
import { Link } from "react-router-dom";

function RecruiterRegisterComponent() {
  const [isRegistered, setRegistered] = useState(false);
  const [usernameAlreadyExists, setUsernameAlreadyExists] = useState(false);
  async function isUsernameAlreadyExists(username) {
    try {
      const response = await usernameApi(username);
      console.log(response.status);
      return false;
    } catch (error) {
      console.log(error);
      setUsernameAlreadyExists(true);
      return true;
    }
  }

  async function onSubmit(values) {
    if (await isUsernameAlreadyExists(values.username)) {
      setUsernameAlreadyExists(true);
    } else {
      setUsernameAlreadyExists(false);
      let recruiter = {
        companyName: values.companyName,
        recruiterName: values.recruiterName,
        phone: values.phone,
        username: values.username,
        email: values.email,
      };

      let user = {
        username: values.username,
        password: values.password,
        roles: ["RECRUITER"],
      };
      console.log(recruiter);
      console.log(user);
      const recruiterAdded = true;
      const usercreated = true;
      if (recruiterAdded && usercreated) setRegistered(true);
    }
  }

  const validate = (values) => {
    const errors = {};
    if (!values.companyName) {
      errors.companyName = "Company Name is required";
    }
    if (!values.recruiterName) {
      errors.recruiterName = "Fullname of recruiter is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (values.phone.length != 10)
      errors.phone = "enter a valid phone number";
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.username) {
      errors.username = "A valid Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }

    if (values.confirmPassword != values.password)
      errors.confirmPassword = "Passwords do not match!";
    return errors;
  };
  return (
    <div className="container p-5 w-75">
      <h1>
        Fill the following form to Register as a Recruiter with GetHired.in
      </h1>
      <hr className="border border-primary border-3 opacity-75"></hr>
      <Formik
        initialValues={{
          companyName: "",
          recruiterName: "",
          phone: "",
          email: "",
          username: "",
          password: "",
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
                    name="recruiterName"
                    component="div"
                    className="alert alert-warning"
                  />
                  <label className="form-label">Your Full Name*</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="recruiterName"
                  />
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
                    name="phone"
                    component="div"
                    className="alert alert-warning"
                  />
                  <label className="form-label">Phone*</label>
                  <Field type="text" className="form-control" name="phone" />
                </fieldset>
              </div>
              <div className="col">
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

                <fieldset className="form-group p-3">
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="alert alert-warning"
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
                    <div className="alert alert-success form-group">
                      <span className="p-5">
                        Account registeration successful!
                      </span>
                      <Link to="/recruiter/login" className="btn btn-primary">
                        Login Here!
                      </Link>
                    </div>
                  </fieldset>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div></div>
    </div>
  );
}

export default RecruiterRegisterComponent;
