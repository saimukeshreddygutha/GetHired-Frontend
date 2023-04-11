function JobApplicationsTable(props) {
  const { jobApplications } = props;
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
        </tr>
      </thead>
      <tbody>
        {jobApplications.map((jobApplication) => (
          <tr key={jobApplication.id}>
            <td>{jobApplication.jobSeekerFullName}</td>
            <td>{jobApplication.jobSeekerAge}</td>
            <td>{jobApplication.jobSeekerGender}</td>
            <td>{jobApplication.jobSeekerEmail}</td>
            <td>{jobApplication.location}</td>
            <td>{jobApplication.jobSeekerResumeLink}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobApplicationsTable;
