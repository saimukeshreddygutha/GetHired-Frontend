import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AuthProvider from "./security/AuthContext";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useAuth } from "./security/AuthContext";
import IntroComponent from "./IntroComponent";
import JobSeekerRegisterComponent from "./JobSeekerRegisterComponent";
import JobSeekerLoginComponent from "./JobSeekerLoginComponent";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default function JobPortalApp() {
  return (
    <div className="JobPortalApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<IntroComponent />} />
            <Route
              path="/register/jobseeker"
              element={<JobSeekerRegisterComponent />}
            />
            <Route path="/register/recruiter" element={<IntroComponent />} />
            <Route
              path="/jobseeker/login"
              element={<JobSeekerLoginComponent />}
            />
            <Route
              path="/jobseeker/home   "
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
