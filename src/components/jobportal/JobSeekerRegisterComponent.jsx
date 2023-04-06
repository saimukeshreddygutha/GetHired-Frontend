import { Formik, Form, Field, ErrorMessage } from "formik";

export default function JobSeekerRegisterComponent() {
  const initialValues = {
    name: "",
    age: "",
    email: "",
    gender: "",
    dob: "",
    location: "",
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is required";
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
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <Field type="number" id="age" name="age" />
            <ErrorMessage
              name="age"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <Field as="select" id="gender" name="gender">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="dob">Date of birth:</label>
            <Field type="date" id="dob" name="dob" />
            <ErrorMessage
              name="dob"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <Field type="text" id="location" name="location" />
            <ErrorMessage
              name="location"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
