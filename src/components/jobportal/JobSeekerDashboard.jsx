import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { useState, useEffect } from "react";
import { getAllJobAds } from "./api/JobPortalAPIService";
import JobAdsTable from "./JobAdsTable";

function JobSeekerDashboard() {
  const authContext = useAuth();
  const username = authContext.username;
  const jobSeekerId = authContext.userId;
  useEffect(() => retrieveAllApplications(), [username]);
  const [jobAds, setjobAds] = useState([]);
  function retrieveAllApplications() {
    getAllJobAds(username).then((response) => setjobAds(response.data));
  }
  function getApplicationsForJobSeeker() {}
  return (
    <div className="container">
      <h1 className="text-center">Welcome {username}!</h1>
      <h4 className="text-center mb-5">JobSeeker Dashboard</h4>
      <div className="text-center">
        <Link
          className="btn btn-success me-5"
          to={`/jobseeker/${username}/edu/add`}
        >
          Add/Edit Education
        </Link>
        <Link className="btn btn-success" to={`/jobseeker/${username}/exp/add`}>
          Add/Edit Experience
        </Link>
      </div>

      <h3>Available Jobs:</h3>
      <JobAdsTable jobAds={jobAds} />
    </div>
  );
}

export default JobSeekerDashboard;
