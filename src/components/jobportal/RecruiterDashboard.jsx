import React, { useEffect, useState } from "react";
import JobAdsTable from "./JobAdsTable";
import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { getRecruiterJobAds } from "./api/JobPortalAPIService";
function RecruiterDashboard() {
  const authContext = useAuth();
  const username = authContext.username;
  const userId = authContext.userId;
  const [jobAds, setJobAds] = useState([]);
  useEffect(() => retrieveRecruiterJobAds(), [username]);

  function retrieveRecruiterJobAds() {
    getRecruiterJobAds(username)
      .then((response) => {
        if (response.status == 200) setJobAds(response.data);
      })
      .catch((error) => console.log(error));
  }
  
  return (
    <div className="container">
      <h1 className="text-center">Welcome {username}</h1>
      <h4 className="text-center">Recruiter Dashboard</h4>
      <h3>Your Job Ads: </h3>
      <JobAdsTable jobAds={jobAds} />

      <div className="text-center">
        <Link
          className="btn btn-success text-center"
          to={`/recruiter/${username}/job/add`}
        >
          Post a JobAd
        </Link>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
