import { useEffect, useState } from "react";
import { useAuth } from "./security/AuthContext";
import { useParams, Link } from "react-router-dom";
import { getJobApplicationsByJobId } from "./api/JobPortalAPIService";

function JobApplicationsTable() {
  const [jobApplications, setJobApplications] = useState([]);
  const authContext = useAuth();
  const { id } = useParams();
  const username = authContext.username;
  const userId = authContext.userId;

  useEffect(() => retrieveJobApplicationsById(), [id]);

  function retrieveJobApplicationsById() {
    getJobApplicationsByJobId(username, id)
      .then((response) => {
        if (response.status == 200) setJobApplications(response.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Applicant Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Location</th>
          <th>Resume Link</th>
          <th>Match</th>
          <th>View Application</th>
        </tr>
      </thead>
      <tbody>
        {jobApplications.map((jobApplication) => (
          <tr key={jobApplication.id}>
            <td>{jobApplication.jobSeekerFullName}</td>
            <td>{jobApplication.jobSeekerAge}</td>
            <td>{jobApplication.jobSeekerGender}</td>
            <td>{jobApplication.jobSeekerEmail}</td>
            <td>{jobApplication.jobSeekerLocation}</td>
            <td>{jobApplication.jobSeekerResumeLink}</td>
            <td>{jobApplication.match}</td>
            <td>
              <Link
                to={`/recruiter/${username}/application/view/${jobApplication.id}`}
              >
                <button className="btn btn-primary">View Application</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobApplicationsTable;
