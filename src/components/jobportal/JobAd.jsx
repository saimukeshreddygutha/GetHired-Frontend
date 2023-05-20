import { useState } from "react";
import { useAuth } from "./security/AuthContext";
import { Link } from "react-router-dom";
import { applyForJob } from "./api/JobPortalAPIService";
import map from "../images/map.png";
function JobAd({
  jobId,
  companyName,
  roleName,
  location,
  packageDetails,
  experienceRequired,
  skillsRequired,
  description,
  createdDate,
}) {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const role = authContext.role;
  const username = authContext.username;
  const [isExpanded, setExpanded] = useState(false);
  function toggleReadMore() {
    console.log(experienceRequired, skillsRequired);
    setExpanded((prevState) => !prevState);
  }

  function applyJob(username, jobAdId) {
    if (role != "jobseeker") return;
    applyForJob(username, jobAdId)
      .then((response) => {
        if (response.status == 201) console.log("Success");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="container job-ad px-5 py-3 my-3 shadow">
      <p className="mb-0 date">Date Posted: {createdDate}</p>
      <div className="dflex mb-2">
        <h1 className="role-name py-2">{roleName}</h1>

        {role === "jobseeker" && (
          <button
            className="btn btn-primary m-2"
            onClick={() => applyJob(username, jobId)}
          >
            Apply
          </button>
        )}
        {role === "recruiter" && (
          <Link
            className="btn btn-primary m-2"
            to={`/recruiter/${username}/applications/${jobId}`}
          >
            View Applications
          </Link>
        )}
      </div>

      <div className="dflex">
        <h2 className="company-name">{companyName}</h2>
        <p className="me-2">
          <img className="map" src={map} />
          {location}
        </p>
      </div>
          <p className="jobad-headings">Job Description:</p>
      <p className="desc">{description}</p>
      {!isExpanded ? (
        <p className="readmore" onClick={toggleReadMore}>
          Readmore
        </p>
      ) : (
        <div className="hidden">
          <p className="jobad-headings">Compensation Details:</p>
          <p className="package-details">{packageDetails}</p>
          <p className="jobad-headings">Skills Required:</p>
          <p className="skills-required">{skillsRequired}</p>
          <p className="jobad-headings">Experience Required:</p>
          <p className="experience-required">{experienceRequired}</p>
          <Link
            to={`/${role}/${username}/jobad/view/${jobId}`}
            className="btn btn-success my-3"
          >
            View Complete JobAd
          </Link>
          <p className="readless" onClick={toggleReadMore}>
            Readless
          </p>
        </div>
      )}
    </div>
  );
}

export default JobAd;
