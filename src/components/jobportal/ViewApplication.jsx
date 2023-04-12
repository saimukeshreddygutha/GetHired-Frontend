function ViewApplication() {
  const jobApplication = {
    id: "id",
    jobSeekerFullName: "jobSeekerFullName",
    companyName: "companyName",
    location: "location",
    jobSeekerEmail: "email",
    jobSeekerAge: "age",
    jobSeekerGender: "gender",
    jobSeekerResumeLink: "jobSeekerResumeLink",
    educationList: ["1", "2", "3"],
    experienceList: ["ex1", "ex2", "ex3"],
  };
  const educationList = [
    {
      instituteName: "instituteName",
      program: "program",
      branch: "branch",
      cgpa: "cgpa",
      startDate: "startDate",
      endDate: "endDate",
      sem: "sem",
    },
  ];

  const experienceList = [
    {
      companyName: "companyName",
      descriptionOfRole:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat diam vel est pretium tincidunt. Donec et orci ipsum. Vestibulum vestibulum purus sed risus accumsan suscipit. Curabitur finibus massa ac massa faucibus, sed rutrum ex vehicula. Donec pellentesque congue neque a finibus. Vivamus lectus est, aliquet nec porttitor sit amet, vestibulum eu erat. Vivamus id orci sit amet dui facilisis tristique",
      designation: "designation",
      isCurrentlyWorking: "isCurrentlyWorking",
      startDate: "startDate",
      endDate: "endDate",
    },
  ];

  return (
    <div className="container w-75">
      <div className="container pb-4">
        <h3>Personal Details</h3>
        <div className="container">
          <ViewComponent header="ApplicationId" data={jobApplication.id} />
          <ViewComponent
            header="jobSeekerFullName"
            data={jobApplication.jobSeekerFullName}
          />
          <ViewComponent header="location" data={jobApplication.location} />
          <ViewComponent
            header="jobSeekerEmail"
            data={jobApplication.jobSeekerEmail}
          />
          <ViewComponent
            header="jobSeekerAge"
            data={jobApplication.jobSeekerAge}
          />
          <ViewComponent
            header="jobSeekerResumeLink"
            data={jobApplication.jobSeekerResumeLink}
          />
        </div>
      </div>
      <ViewEducationComponent header="Education" data={educationList} />
      <ViewExperienceComponent header="Experience" data={experienceList} />
    </div>
  );
}

const ViewEducationComponent = ({ header, data }) => {
  return (
    <div className="container pb-4">
      <h3>{header}</h3>
      {data.map((education, index) => (
        <div className="container">
          <div key={index}>
            <ViewComponent
              header="instituteName"
              data={education.instituteName}
            />
            <ViewComponent header="program" data={education.program} />
            <ViewComponent header="branch" data={education.branch} />
            <ViewComponent header="cgpa" data={education.cgpa} />
            <ViewComponent header="startDate" data={education.startDate} />
            <ViewComponent header="endDate" data={education.endDate} />
            <ViewComponent header="sem" data={education.sem} />
          </div>
        </div>
      ))}
    </div>
  );
};

const ViewExperienceComponent = ({ header, data }) => {
  return (
    <div className="container pb-4">
      <h3>{header}</h3>
      {data.map((experience, index) => (
        <div className="container">
          <div key={index}>
            <ViewComponent header="companyName" data={experience.companyName} />
            <ViewComponent header="designation" data={experience.designation} />
            <ViewComponent
              header="descriptionOfRole"
              data={experience.descriptionOfRole}
            />
            <ViewComponent header="startDate" data={experience.startDate} />
            <ViewComponent header="endDate" data={experience.endDate} />
            <ViewComponent
              header="isCurrentlyWorking"
              data={experience.isCurrentlyWorking}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const ViewComponent = ({ header, data }) => {
  return (
    <div className="row pb-2">
      <div className="col-4">{header}</div>
      <div className="col-8">{data}</div>
    </div>
  );
};


export default ViewApplication;
