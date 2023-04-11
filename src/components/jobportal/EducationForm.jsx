import React, { useState } from "react";
import { Formik, Field, FieldArray, Form } from "formik";
function EducationForm() {
  const [isPursuing, setIsPursuing] = useState(false);
  function validate(values) {
    console.log(values);
    const errors = {};
    return errors;
  }
  return (
    <div className="container my-5 pb-5">
      <h1>Education Form</h1>
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
              sem: 0,
            },
          ],
        }}
        validateOnBlur={true}
        validate={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="educations">
              {({ push, remove }) => (
                <div>
                  {values.educations.map((_, index) => (
                    <div key={index}>
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
                      <div className="form-group">
                        <label>Semester:</label>
                        <Field
                          className="form-control"
                          type="number"
                          name={`educations[${index}].sem`}
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
                        instituteName: "",
                        program: "",
                        branch: "",
                        cgpa: 0,
                        startDate: "",
                        endDate: "",
                        sem: 0,
                      })
                    }
                  >
                    Add Education
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

export default EducationForm;
