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
  const [show, setShow] = useState("jobads");
  const [applied, setApplied] = useState([]);
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
    setShow("applied");
    getAllAppliedJobs(username)
      .then((response) => setApplied(response.data))
      .catch((error) => console.log(error));

    console.log(applied);
  }
  function getApplicationsForJobSeeker() {}
  return (
    <div className="py-5 mx-5">
      <div className="row">
        <div className="col-2 pt-5">
          <button className="btn btn-success mb-1" onClick={sortAdsByMatch}>
            Match Profile
          </button>
          <br />
          <button className="btn btn-success" onClick={getAppliedJobs}>
            Applied JobAds
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

        {show === "jobads" && (
          <div className="col">
            <JobAdsTable
              jobAds={jobAds}
              applied={false}
              reload={retrieveAllApplications}
            />
          </div>
        )}
        {show === "applied" && (
          <div className="col">
            <JobAdsTable jobAds={applied} applied={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default JobSeekerDashboard;
