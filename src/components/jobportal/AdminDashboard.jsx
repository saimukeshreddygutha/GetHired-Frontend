import { useState, useEffect } from "react";
import { useAuth } from "./security/AuthContext";
import { getAllJS, getAllRec } from "./api/JobPortalAPIService";

export default function AdminDashboard() {
  const authContext = useAuth();

  const [jobseekers, setJobseekers] = useState([]);
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => retriverUsers(), []);

  function retriverUsers() {
    getAllJS()
      .then((response) => setJobseekers(response.data))
      .catch((error) => console.log(error));

    getAllRec()
      .then((response) => setRecruiters(response.data))
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <div className="py-5 mx-5">
        <h2>Jobseekers</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {jobseekers.map((js) => (
              <tr key={js.id}>
                <td>{js.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Recruiters</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {recruiters.map((rc) => (
              <tr key={rc.id}>
                <td>{rc.recruiterName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
