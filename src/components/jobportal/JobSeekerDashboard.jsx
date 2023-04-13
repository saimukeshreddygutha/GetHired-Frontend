import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function JobSeekerDashboard() {
  const authContext = useAuth();
  const username = authContext.username;
  const jobSeekerId = authContext.userId;
  function getApplicationsForJobSeeker() {}
  return (
    <div className="container">
      <h1>JobSeeker Dashboard</h1>
      <Link
        className="btn btn-success me-5"
        to={`/jobseeker/${username}/edu/add`}
      >
        Add Education
      </Link>
      <Link className="btn btn-success" to={`/jobseeker/${username}/exp/add`}>
        Add Experience
      </Link>
      <h3>Available Jobs:</h3>
    </div>
  );
}

export default JobSeekerDashboard;
