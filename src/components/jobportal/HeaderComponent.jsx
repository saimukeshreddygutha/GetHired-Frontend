import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import logo from "../images/recruitment.png";
export default function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;
  const role = authContext.role;
  function logout() {
    authContext.logout();
  }

  return (
    <header className="header-color">
      <nav className="navbar navbar-expand-lg navbar-light px-2 py-4 border-bottom">
        <Link className="navbar-brand px-4 " to="/">
          <img src={logo} className="mx-2" />
          <span className="brand">GetHired.ai</span>
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
            <li className="nav-item">
              <Link className="nav-link" to="/logout" onClick={logout}>
                <span className="brand">Logout</span>
              </Link>
            </li>
          )}
          {!isAuthenticated && (
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <span className="brand">Register</span>
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
            <li className="nav-item dropdown pe-5 me-5">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <span className="brand">Login</span>
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
