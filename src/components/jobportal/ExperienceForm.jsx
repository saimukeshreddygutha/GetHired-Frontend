import React, { useState } from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import { useAuth } from "./security/AuthContext";
import { addExpApi } from "./api/JobPortalAPIService";
import { error } from "jquery";
function ExperienceForm() {
  const authContext = useAuth();
  const username = authContext.username;
  const userId = authContext.userId;
  const [isAdded, setAdded] = useState(false);

  async function onSubmit(values) {
    console.log(values);

    await addExpApi(values.experiences, username)
      .then((response) => {
        if (response.status == 201) setAdded(true);
      })
      .catch((error) => console.log(error));
  }
  function validate(values) {
    const errors = {};
    return errors;
  }
  return (
    <div className="container my-5 pb-5">
      <h1>Experience</h1>

      {isAdded && (
        <div className="alert alert-success">Experience added Successfully</div>
      )}
      <Formik
        initialValues={{
          experiences: [
            {
              companyName: "",
              designation: "",
              startDate: "",
              endDate: "",
              descriptionOfRole: "",
              isCurrentlyWorking: false,
            },
          ],
        }}
        validateOnBlur={true}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="experiences">
              {({ push, remove }) => (
                <div>
                  {values.experiences.map((_, index) => (
                    <div key={index}>
                      <h3>Experience {index + 1}</h3>
                      <div className="form-group">
                        <label>Company Name</label>
                        <Field
                          className="form-control"
                          type="text"
                          name={`experiences[${index}].companyName`}
                        />
                      </div>
                      <div className="form-group">
                        <label>Designation :</label>
                        <Field
                          className="form-control"
                          type="text"
                          name={`experiences[${index}].designation`}
                        />
                      </div>
                      <div className="form-group">
                        <label>Description :</label>
                        <Field
                          className="form-control"
                          type="text"
                          name={`experiences[${index}].descriptionOfRole`}
                        />
                      </div>

                      <div className="form-group">
                        <label>Start Date:</label>
                        <Field
                          className="form-control"
                          type="date"
                          name={`experiences[${index}].startDate`}
                        />
                      </div>

                      <div className="form-group">
                        <label>End Date:</label>
                        <Field
                          className="form-control"
                          type="date"
                          name={`experiences[${index}].endDate`}
                        />
                      </div>

                      <button
                        className="btn btn-danger mx-5"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    className="btn btn-success my-3"
                    type="button"
                    onClick={() =>
                      push({
                        companyName: "",
                        designation: "",
                        startDate: "",
                        endDate: "",
                        descriptionOfRole: "",
                        isCurrentlyWorking: false,
                      })
                    }
                  >
                    Add Experience
                  </button>
                </div>
              )}
            </FieldArray>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ExperienceForm;
