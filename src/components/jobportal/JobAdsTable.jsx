import React from "react";

function JobAdsTable(props) {
  const { jobAds } = props;

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Role Name</th>
          <th>Location</th>
          <th>Package Details</th>
          <th>Experience Required</th>
          <th>Skills Required</th>
        </tr>
      </thead>
      <tbody>
        {jobAds.map((jobAd) => (
          <tr key={jobAd.recruiterId}>
            <td>{jobAd.companyName}</td>
            <td>{jobAd.roleName}</td>
            <td>{jobAd.location}</td>
            <td>{jobAd.packageDetails}</td>
            <td>{jobAd.experienceRequired}</td>
            <td>{jobAd.skillsRequired}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobAdsTable;
