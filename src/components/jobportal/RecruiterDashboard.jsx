import React from "react";
import JobAdsTable from "./JobAdsTable";
import JobApplicationsTable from "./JobApplicationsTable";
import { Link } from "react-router-dom";
function RecruiterDashboard() {
  const jobAds = [
    {
      recruiterId: "",
      companyName: "",
      description: "",
      roleName: "",
      location: "",
      packageDetails: "",
      experienceRequired: "",
      skillsRequired: "",
      recruiterUsername: "",
    },
  ];
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
          to={`/recruiter/username/job/add`}
        >
          Post a JobAd
        </Link>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
