import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  function logout() {
    authContext.logout();
  }

  return (
    <header className="header ">
      <div className="container bg-light">
        <nav className="navbar navbar-expand-md navbar-light mb-2 p-2 border-bottom">
          <Link className="navbar-brand px-4 " to="/login">
            GetHired.com
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/welcome/sai">
                    Home
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <Link className="nav-link" to="/todos">
                    Todos
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <ul className="navbar-nav">
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item dropdown me-5 pe-4">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Login
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item">JobSeeker</a>
                  <a className="dropdown-item">Recruiter</a>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
