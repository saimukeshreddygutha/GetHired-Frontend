import React from "react";
import JobAdsTable from "./JobAdsTable";

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

  return (
    <div>
      <h1>Recruiter Dashboard</h1>
      <JobAdsTable jobAds={jobAds} />
    </div>
  );
}

export default RecruiterDashboard;
