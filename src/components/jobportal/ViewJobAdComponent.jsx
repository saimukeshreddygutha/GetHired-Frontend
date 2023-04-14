import { useEffect, useState } from "react";
import { ViewComponent } from "./ViewApplication";
import { useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { getJobAd } from "./api/JobPortalAPIService";

function ViewJobAdComponent() {
  const authContext = useAuth();
  const username = authContext.username;
  const userId = authContext.userId;
  const [jobAd, setJobAd] = useState([]);
  const { id } = useParams();
  useEffect(() => retrieveJobAd(), []);
  function retrieveJobAd() {
    getJobAd(id)
      .then((response) => {
        setJobAd(response.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="container w-75">
      <div className="container pb-4">
        <h3>Job Description</h3>
        <div className="container">
          <ViewComponent header="Job Id" data={jobAd.jobId} />
          <ViewComponent header="Company Name" data={jobAd.companyName} />
          <ViewComponent header="Location" data={jobAd.location} />
          <ViewComponent header="Description" data={jobAd.description} />
          <ViewComponent header="Role Name" data={jobAd.roleName} />
          <ViewComponent header="Created Date" data={jobAd.createdDate} />
          <ViewComponent header="PackageDetails" data={jobAd.packageDetails} />
          <ViewComponent header="SkillsRequired" data={jobAd.skillsRequired} />
          <ViewComponent
            header="Experience Required"
            data={jobAd.experienceRequired}
          />
          <ViewComponent
            header="Recruiter Username"
            data={jobAd.recruiterUsername}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewJobAdComponent;
