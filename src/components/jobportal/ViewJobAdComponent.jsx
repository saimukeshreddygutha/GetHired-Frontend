import { ViewComponent } from "./ViewApplication";

function ViewJobAdComponent() {
  const jobAd = {
    jobId: "jobId",
    companyName: "companyName",
    recruiterId: "recruiterId",
    description: "description",
    roleName: "roleName",
    location: "location",
    createdDate: "createdDate",
    packageDetails: "packageDetails",
    experienceRequired: "experienceRequired",
    skillsRequired: "skillsRequired",
    recruiterUsername: "recruiterUsername",
  };
  return (
    <div className="container w-75">
      <div className="container pb-4">
        <h3>Job Description</h3>
        <div className="container">
          <ViewComponent header="jobId" data={jobAd.jobId} />
          <ViewComponent header="companyName" data={jobAd.companyName} />
          <ViewComponent header="location" data={jobAd.location} />
          <ViewComponent header="description" data={jobAd.description} />
          <ViewComponent header="roleName" data={jobAd.roleName} />
          <ViewComponent header="createdDate" data={jobAd.createdDate} />
          <ViewComponent header="packageDetails" data={jobAd.packageDetails} />
          <ViewComponent header="skillsRequired" data={jobAd.skillsRequired} />
          <ViewComponent
            header="experienceRequired"
            data={jobAd.experienceRequired}
          />
          <ViewComponent
            header="jobSeekerResumeLink"
            data={jobAd.recruiterUsername}
          />
        </div>
      </div>
    </div>
  );
}

export default ViewJobAdComponent;
