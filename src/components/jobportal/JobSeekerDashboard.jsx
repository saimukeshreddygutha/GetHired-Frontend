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
    <div className="container py-5">
      <div className="row">
        <div className="col-2">
          <Link
            className="btn btn-success me-5"
            to={`/jobseeker/${username}/edu/add`}
          >
            Add/Edit Education
          </Link>
          <Link
            className="btn btn-success"
            to={`/jobseeker/${username}/exp/add`}
          >
            Add/Edit Experience
          </Link>
        </div>

        <div className="col">
          <JobAdsTable jobAds={jobAds} />
        </div>
      </div>
    </div>
  );
}

export default JobSeekerDashboard;
