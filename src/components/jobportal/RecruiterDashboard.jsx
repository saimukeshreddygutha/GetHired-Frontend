import React from "react";
import JobAdsTable from "./JobAdsTable";
import JobApplicationsTable from "./JobApplicationsTable";
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
    <div>
      <h1>Recruiter Dashboard</h1>
      <JobAdsTable jobAds={jobAds} />
      <JobApplicationsTable jobApplications={jobApplications} />
    </div>
  );
}

export default RecruiterDashboard;
