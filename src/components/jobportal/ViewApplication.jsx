import { useEffect, useState } from "react";
import { useAuth } from "./security/AuthContext";
import { useParams } from "react-router-dom";
import { getApplicationByApplicationId } from "./api/JobPortalAPIService";

function ViewApplication() {
  const authContext = useAuth();
  const username = authContext.username;
  const userId = authContext.userId;
  const { id } = useParams();
  const [jobApplication, setJobApplication] = useState([]);
  useEffect(() => retrieveJobApplication(), [id]);

  function retrieveJobApplication() {
    getApplicationByApplicationId(username, id)
      .then((response) => setJobApplication(response.data))
      .catch((error) => console.log(error));

    console.log(jobApplication);
  }

  return (
    <div className="container w-75">
      <div className="container pb-4">
        <h3>Personal Details</h3>
        <div className="container">
          <ViewComponent header="ApplicationId" data={jobApplication.id} />
          <ViewComponent
            header="Full Name"
            data={jobApplication.jobSeekerFullName}
          />
          <ViewComponent
            header="Location"
            data={jobApplication.jobSeekerLocation}
          />
          <ViewComponent header="Email" data={jobApplication.jobSeekerEmail} />
          <ViewComponent header="Age" data={jobApplication.jobSeekerAge} />
          <ViewComponent
            header="Resume Link"
            data={jobApplication.jobSeekerResumeLink}
          />
        </div>
      </div>
      <ViewEducationComponent
        header="Education"
        data={jobApplication.educationList ? jobApplication.educationList : []}
      />
      <ViewExperienceComponent
        header="Experience"
        data={
          jobApplication.experienceList ? jobApplication.experienceList : []
        }
      />
    </div>
  );
}

const ViewEducationComponent = ({ header, data }) => {
  return (
    <div className="container pb-4">
      <h3>{header}</h3>
      {data.map((education, index) => (
        <div className="container">
          <div key={index}>
            <ViewComponent
              header="Institute Name"
              data={education.instituteName}
            />
            <ViewComponent header="Program" data={education.program} />
            <ViewComponent header="Branch" data={education.branch} />
            <ViewComponent header="CGPA" data={education.cgpa} />
            <ViewComponent header="Start Date" data={education.startDate} />
            <ViewComponent header="End Date" data={education.endDate} />
          </div>
        </div>
      ))}
    </div>
  );
};

const ViewExperienceComponent = ({ header, data }) => {
  return (
    <div className="container pb-4">
      <h3>{header}</h3>
      {data.map((experience, index) => (
        <div className="container">
          <div key={index}>
            <ViewComponent
              header="Company Name"
              data={experience.companyName}
            />
            <ViewComponent header="Designation" data={experience.designation} />
            <ViewComponent
              header="Description of the Role"
              data={experience.descriptionOfRole}
            />
            <ViewComponent header="Start Date" data={experience.startDate} />
            <ViewComponent header="End Date" data={experience.endDate} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ViewComponent = ({ header, data }) => {
  return (
    <div className="row pb-2">
      <div className="col-4">{header}</div>
      <div className="col-8">{data}</div>
    </div>
  );
};

export default ViewApplication;
