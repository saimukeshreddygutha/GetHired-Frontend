import React, { useEffect, useState } from "react";
import JobAdsTable from "./JobAdsTable";
import JobApplicationsTable from "./JobApplicationsTable";
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
  const jobApplications = [
    {
      id: "",
      jobSeekerResumeLink: "",
      jobSeekerEmail: "",
      jobSeekerGender: "",
      jobSeekerAge: "",
      jobSeekerFullName: "",
      jobSeekerEmail: "",
      location: "",
    },
  ];
  return (
    <div className="container">
      <h1>Recruiter Dashboard</h1>
      <h3>Your Job Ads: </h3>
      <JobAdsTable jobAds={jobAds} />
      {/* <JobApplicationsTable jobApplications={jobApplications} /> */}
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
