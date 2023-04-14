import React from "react";
import { useAuth } from "./security/AuthContext";
import { Link } from "react-router-dom";

function JobAdsTable(props) {
  const authContext = useAuth();
  const username = authContext.username;
  const role = authContext.role;
  const userId = authContext.userId;
  const { jobAds } = props;

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
                View Job Ad
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobAdsTable;
