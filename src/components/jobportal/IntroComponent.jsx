import { Link } from "react-router-dom";

export default function IntroComponent() {
  return (
    <div className="IntroComponent text-center">
      <div className="d-flex flex-column align-items-center justify-content-center text-center mt-5">
        <h1 className="brand-color">
          <span className="at-font">at</span>
          {""} GetHired.com
        </h1>
        <h3>
          We help connect <span className="">Talent</span> and {""}
          <span className="">Recruiters</span>
        </h3>
      </div>

      <div className="container text-fluid py-5 register">
        <div className="row">
          <div className="col p-5">
            <h1 className="intropage">Your Next Career Opportunity Awaits!</h1>
            <p className="lead">
              Find your dream job with us! Register as a job seeker to apply for
              job positions and get noticed by employers.
            </p>
            <hr className="my-4" />
            <p>
              Our platform offers a variety of job opportunities in various
              industries and locations. Sign up today to start your job search!
            </p>
            <Link
              className="btn btn-primary btn-lg"
              to="/jobseeker/register"
              role="button"
            >
              Register as Job Seeker
            </Link>
          </div>
          <div className="col p-5">
            <h1 className="intropage">
              Find the best talent for your team with us!
            </h1>
            <p className="lead">
              Find the best talent for your job positions with us! Register as a
              recruiter to access our pool of qualified job seekers.
            </p>
            <hr className="my-4" />
            <p>
              Our platform offers a variety of job opportunities in various
              industries and locations. Sign up today to start hiring!
            </p>
            <Link
              className="btn btn-primary btn-lg"
              to="/recruiter/register"
              role="button"
            >
              Register as Recruiter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
