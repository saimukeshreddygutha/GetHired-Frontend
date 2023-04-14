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
          <ViewComponent header="jobId" data={jobAd.jobId} />
          <ViewComponent header="companyName" data={jobAd.companyName} />
          <ViewComponent header="location" data={jobAd.location} />
          <ViewComponent header="description" data={jobAd.description} />
          <ViewComponent header="roleName" data={jobAd.roleName} />
          <ViewComponent header="createdDate" data={jobAd.createdDate} />
          <ViewComponent header="packageDetails" data={jobAd.packageDetails} />
          <ViewComponent header="skillsRequired" data={jobAd.skillsRequired} />
          <ViewComponent
            header="experienceRequired"
            data={jobAd.experienceRequired}
          />
          <ViewComponent
            header="recruiterUsername"
            data={jobAd.recruiterUsername}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewJobAdComponent;
