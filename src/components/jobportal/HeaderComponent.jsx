import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  function logout() {
    authContext.logout();
  }

  return (
    <header className="header-color">
      <div className="container py-2 mb-5">
        <nav className="navbar navbar-expand-lg navbar-light px-2 border-bottom">
          <Link className="navbar-brand px-4 " to="/">
            <span className="brand">GetHired.in</span>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/jobseeker/dashboard">
                    <span className="brand"> Dashboard</span>
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/todos">
                    <span className="brand">Todos</span>
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
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
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
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
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
      </div>
    </header>
  );
}
