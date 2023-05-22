import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { useState, useEffect } from "react";
import {
  getAllJobAds,
  getSortedJobads,
  getAllAppliedJobs,
} from "./api/JobPortalAPIService";
import JobAdsTable from "./JobAdsTable";

function JobSeekerDashboard() {
  const authContext = useAuth();
  const username = authContext.username;
  const jobSeekerId = authContext.userId;
  useEffect(() => retrieveAllApplications(), []);

  const [jobAds, setjobAds] = useState([]);
  function retrieveAllApplications() {
    getAllJobAds(username).then((response) => {
      setjobAds(response.data);
      console.log(response.data);
    });
  }

  function sortAdsByMatch() {
    getSortedJobads({ jobAds: jobAds, username: username })
      .then((response) => setjobAds(response.data.sortedJobAds))
      .catch((error) => {
        console.log(error);
      });
  }

  function getAppliedJobs() {
    getAllAppliedJobs(username)
      .then((response) => setjobAds(response.data))
      .catch((error) => console.log(error));
  }
  function getApplicationsForJobSeeker() {}
  return (
    <div className="py-5 mx-5">
      <div className="row">
        <div className="col-2 pt-5">
          <button className="btn btn-success" onClick={sortAdsByMatch}>
            Match
          </button>
          <button className="btn btn-success" onClick={getAppliedJobs}>
            Applied
          </button>
          <Link
            className="btn btn-success my-1"
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
