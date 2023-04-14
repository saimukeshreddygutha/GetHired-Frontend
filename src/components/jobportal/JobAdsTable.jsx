import React from "react";
import { useAuth } from "./security/AuthContext";
import { Link } from "react-router-dom";
import { applyForJob } from "./api/JobPortalAPIService";

function JobAdsTable(props) {
  const authContext = useAuth();
  const username = authContext.username;
  const role = authContext.role;
  const userId = authContext.userId;
  const { jobAds } = props;
  function applyJob(username, jobAdId) {
    if (role != "jobseeker") return;
    applyForJob(username, jobAdId)
      .then((response) => {
        if (response.status == 201) console.log("Success");
      })
      .catch((error) => console.log(error));
  }

  function viewApplied(username, jobAdId){

  }
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Role Name</th>
          <th>Location</th>
          <th>Package Details</th>
          <th>Experience Required</th>
          <th>Skills Required</th>
          <th>View JobAd</th>
          {role === "jobseeker" && <th>Apply</th>}
          {role === "recruiter" && <th>View Applications</th>}
        </tr>
      </thead>
      <tbody>
        {jobAds.map((jobAd) => (
          <tr key={jobAd.jobId}>
            <td>{jobAd.companyName}</td>
            <td>{jobAd.roleName}</td>
            <td>{jobAd.location}</td>
            <td>{jobAd.packageDetails}</td>
            <td>{jobAd.experienceRequired}</td>
            <td>{jobAd.skillsRequired}</td>
            <td>
              <Link
                to={`/${role}/${username}/jobad/view/${jobAd.jobId}`}
                className="btn btn-success"
              >
                View JobAd
              </Link>
            </td>
            {role === "jobseeker" && (
              <td>
                <button
                  className="btn btn-primary"
                  onClick={()=>applyJob(username, jobAd.jobId)}
                  
                >
                  Apply
                </button>
              </td>
            )}
            {
              role === "recruiter" && (
                <td><Link className="btn btn-primary" to={`/recruiter/${username}/applications/${jobAd.jobId}`}>View Applications</Link></td>
              )
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobAdsTable;
