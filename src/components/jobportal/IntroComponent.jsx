import { Link } from "react-router-dom";

import student from "../images/student.png";
import recruiter from "../images/recruiter.png";
import { useEffect, useState } from "react";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function IntroComponent() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="introbg">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div className="introcontainer pb-5">
        <div className="col center">
          <div className="container pt-5 px-5">
            <div className="mb-5">
              <img src={student} className="introicons shadow-lg me-5" />
              <Link
                className="register-btn-left shadow-lg"
                to="/jobseeker/register"
              >
                Register Here!
              </Link>
            </div>
            <div className="my-5 align-items-left px-5">
              <Link
                className="register-btn-right shadow-lg"
                to="/jobseeker/login"
              >
                Login Here
              </Link>
              <div className="mt-4 haveaccount-left">
                Already having an account?
              </div>
            </div>
            <h1 className="introheader mb-5 px-5 py-5">
              Interested in opportunities like internships, projects and jobs?
            </h1>

            <div className="intro-subheading"></div>
          </div>
        </div>
        <div className="col center">
          <div className="container pt-5 px-5">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="introheader mb-5 px-5 py-5">
              Looking to <br /> hire Young and brilliant minds from the Campus?
            </h1>
            <div className="my-5 align-items-right px-5">
              <div className="mb-4 haveaccount-left">
                Already having an account?
              </div>
              <Link
                className="register-btn-right shadow-lg"
                to="/recruiter/login"
              >
                Login Here
              </Link>
            </div>
            <div className="mb-5">
              <Link
                className="register-btn-left shadow-lg me-5 verticalalign mb-0"
                to="/recruiter/register"
              >
                Register Here!
              </Link>
              <img src={recruiter} className="introicons shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
