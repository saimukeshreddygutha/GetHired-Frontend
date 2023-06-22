import React from "react";
import { useAuth } from "./security/AuthContext";
import { Link } from "react-router-dom";
import { applyForJob } from "./api/JobPortalAPIService";
import JobAd from "./JobAd";

function JobAdsTable(props) {
  const authContext = useAuth();
  const username = authContext.username;
  const role = authContext.role;
  const userId = authContext.userId;
  const { jobAds, applied, reload } = props;
  function applyJob(username, jobAdId) {
    if (role != "jobseeker") return;
    applyForJob(username, jobAdId)
      .then((response) => {
        if (response.status == 201) console.log("Success");
      })
      .catch((error) => console.log(error));
  }

  function viewApplied(username, jobAdId) {}
  return (
    <div>
      {jobAds.map((jobAd) => (
        <JobAd
          key={jobAd.jobAdId}
          {...jobAd}
          applied={applied}
          reload={reload}
        />
      ))}
    </div>
  );
}

export default JobAdsTable;
