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
      <h1>JobSeeker Dashboard</h1>
      <Link
        className="btn btn-success me-5"
        to={`/jobseeker/${username}/edu/add`}
      >
        Add Education
      </Link>
      <Link className="btn btn-success" to={`/jobseeker/${username}/exp/add`}>
        Add Experience
      </Link>
      <h3>Available Jobs:</h3>
      <JobAdsTable jobAds={jobAds} />
    </div>
  );
}

export default JobSeekerDashboard;
