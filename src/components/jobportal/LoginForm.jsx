import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginForm({ role, onSuccess }) {
  const authContext = useAuth();
  const navigate = useNavigate();
  const [showLoginError, setShowLoginError] = useState(false);

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
    if (!values.username) errors.username = "Username cannot be empty";
    if (!values.password) errors.password = "Password cannot be empty";

    return errors;
  }

  return (
    <div className="container">
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
                <div className="alert alert-danger">Authentication Failed!</div>
              )}

              <fieldset className="form-group">
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-warning"
                />
                <label>Username</label>
                <Field
                  type="text"
                  className="form-control mb-2"
                  name="username"
                />
              </fieldset>

              <fieldset className="form-group">
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-warning"
                />
                <label>Password</label>
                <Field
                  type="password"
                  className="form-control mb-2"
                  name="password"
                />
              </fieldset>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
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
    <LoginForm role="RECRUITER" onSuccess={() => navigate("/recruiter/home")} />
  );
}

export function JobSeekerLoginComponent() {
  const navigate = useNavigate();
  return (
    <LoginForm role="JOBSEEKER" onSuccess={() => navigate("/jobseeker/home")} />
  );
}

export function AdminLoginComponent() {
  const navigate = useNavigate();
  return <LoginForm role="ADMIN" onSuccess={() => navigate("/admin/home")} />;
}
