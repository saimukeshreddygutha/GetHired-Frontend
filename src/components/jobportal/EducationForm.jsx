import React, { useState } from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import { addEduApi } from "./api/JobPortalAPIService";
import { useAuth } from "./security/AuthContext";
function EducationForm() {
  const authContext = useAuth();
  const username = authContext.username;
  const userId = authContext.userId;
  const [isPursuing, setIsPursuing] = useState(false);
  const [isAdded, setAdded] = useState(false);

  async function onSubmit(values) {
    await addEduApi(values.educations, username)
      .then((response) => {
        if (response.status == 201) setAdded(true);
        else setAdded(false);
      })
      .catch((error) => console.log(error));
  }
  function validate(values) {
    const errors = {};
    return errors;
  }
  return (
    <div className="container my-5 pb-5 w-50">
      <h1>Education Form</h1>
      {isAdded && (
        <div className="alert alert-success">
          Successfully added update your education details
        </div>
      )}
      <Formik
        initialValues={{
          educations: [
            {
              instituteName: "",
              program: "",
              branch: "",
              cgpa: 0,
              startDate: "",
              endDate: "",
            },
          ],
        }}
        validateOnBlur={true}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="educations">
              {({ push, remove }) => (
                <div>
                  {values.educations.map((_, index) => (
                    <div className="mt-4" key={index}>
                      <h3>Education {index + 1}</h3>
                      <div className="form-group">
                        <label>Institute Name:</label>
                        <Field
                          className="form-control"
                          type="text"
                          name={`educations[${index}].instituteName`}
                        />
                      </div>
                      <div className="form-group">
                        <label>Program:</label>
                        <Field
                          className="form-control"
                          type="text"
                          name={`educations[${index}].program`}
                        />
                      </div>
                      <div className="form-group">
                        <label>Branch:</label>
                        <Field
                          className="form-control"
                          type="text"
                          name={`educations[${index}].branch`}
                        />
                      </div>

                      <div className="form-group">
                        <label>Start Date:</label>
                        <Field
                          className="form-control"
                          type="date"
                          name={`educations[${index}].startDate`}
                        />
                      </div>

                      <div className="form-group">
                        <label>End Date:</label>
                        <Field
                          className="form-control"
                          type="date"
                          name={`educations[${index}].endDate`}
                        />
                      </div>
                      <div className="form-group pb-4">
                        <label>CGPA:</label>
                        <Field
                          className="form-control"
                          type="number"
                          name={`educations[${index}].cgpa`}
                        />
                      </div>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="">
                    <button
                      className="btn btn-success my-3"
                      type="button"
                      onClick={() =>
                        push({
                          instituteName: "",
                          program: "",
                          branch: "",
                          cgpa: 0,
                          startDate: "",
                          endDate: "",
                        })
                      }
                    >
                      Add Education
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EducationForm;
