import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginForm({ role, onSuccess }) {
  const authContext = useAuth();
  const navigate = useNavigate();
  const [showLoginError, setShowLoginError] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  async function onSubmit(values) {
    console.log(values);
    if (await authContext.login(values.username, values.password, role)) {
      setShowLoginError(false);
      onSuccess();
    } else {
      setShowLoginError(true);
    }
  }

  function validate(values) {
    const errors = {};
    if (!values.username) errors.username = "Username cannot be empty!";
    if (!values.password) errors.password = "Password cannot be empty!";

    return errors;
  }

  return (
    <div className="container bg-light w-25">
      <div>
        <Formik
          initialValues={{ username: "", password: "" }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {(props) => (
            <Form>
              {showLoginError && (
                <div className="alert alert-danger center">
                  Authentication Failed!
                </div>
              )}

              <fieldset className="form-group mb-3">
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-warning center"
                />
                <label>Username</label>
                <Field type="text" className="form-control" name="username" />
              </fieldset>

              <fieldset className="form-group mb-3">
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-warning center"
                />
                <label>Password</label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                />
              </fieldset>
              <div className="center">
                <button className="btn btn-primary px-4" type="submit">
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export function RecruiterLoginComponent() {
  const navigate = useNavigate();
  return (
    <LoginForm
      role="RECRUITER"
      onSuccess={() => navigate("/recruiter/dashboard")}
    />
  );
}

export function JobSeekerLoginComponent() {
  const navigate = useNavigate();
  return (
    <LoginForm
      role="JOBSEEKER"
      onSuccess={() => navigate("/jobseeker/dashboard")}
    />
  );
}

export function AdminLoginComponent() {
  const navigate = useNavigate();
  return (
    <LoginForm role="ADMIN" onSuccess={() => navigate("/admin/dashboard")} />
  );
}
