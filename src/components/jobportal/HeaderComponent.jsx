import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import enter from "../images/enter.png";
import logo from "../images/recruitment.png";
import signup from "../images/signup.png";
export default function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const role = authContext.role;
  function logout() {
    authContext.logout();
  }

  return (
    <header className="header-color shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light px-2 py-4 border-bottom">
        <Link className="navbar-brand px-4" to="/">
          <span className="brand brand-title ms-5">
            <img src={logo} className="brand-logo" />
            GetHired.ai
          </span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to={`/${role}/dashboard`}>
                  <span className="brand"> Dashboard</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <ul className="navbar-nav">
          {isAuthenticated && (
            <li className="nav-item me-5 pe-5">
              <Link className="nav-link" to="/logout" onClick={logout}>
                <span className="brand">Logout</span>
              </Link>
            </li>
          )}
          {!isAuthenticated && (
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <span className="brand">
                  <img src={signup} className="enterlogo" />
                  Register
                </span>
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/jobseeker/register">
                  JobSeeker
                </Link>
                <Link className="dropdown-item" to="/recruiter/register">
                  Recruiter
                </Link>
              </div>
            </li>
          )}
          {!isAuthenticated && (
            <li className="nav-item dropdown pe-5 me-4">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <span className="brand">
                  <img src={enter} className="enterlogo" />
                  Login
                </span>
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/jobseeker/login">
                  JobSeeker
                </Link>
                <Link className="dropdown-item" to="/recruiter/login">
                  Recruiter
                </Link>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
