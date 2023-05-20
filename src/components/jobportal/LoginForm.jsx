import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState, useEffect } from "react";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function LoginForm({ role, onSuccess }) {
  const authContext = useAuth();
  const navigate = useNavigate();
  const [showLoginError, setShowLoginError] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
    <div className="container w-25 p-5 login-form">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {role === "jobseeker" && (
        <h1 className="center login-form-h1">Jobseeker Login</h1>
      )}
      {role === "recruiter" && (
        <h1 className="center login-form-h1">Recruiter Login</h1>
      )}
      {role === "admin" && (
        <h1 className="center login-form-h1">Admin Login</h1>
      )}
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
                <button
                  className="btn btn-primary px-4 py-2 shadow-lg"
                  type="submit"
                >
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
    <div className="recruiter-login pt-5">
      <LoginForm
        role="recruiter"
        onSuccess={() => navigate("/recruiter/dashboard")}
      />
    </div>
  );
}

export function JobSeekerLoginComponent() {
  const navigate = useNavigate();
  return (
    <div className="jobseeker-login pt-5">
      <LoginForm
        role="jobseeker"
        onSuccess={() => navigate("/jobseeker/dashboard")}
      />
    </div>
  );
}

export function AdminLoginComponent() {
  const navigate = useNavigate();
  return (
    <div className="admin-login pt-5">
      <LoginForm role="admin" onSuccess={() => navigate("/admin/dashboard")} />
    </div>
  );
}
