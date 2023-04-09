import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AuthProvider from "./security/AuthContext";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useAuth } from "./security/AuthContext";
import IntroComponent from "./IntroComponent";
import JobSeekerRegisterComponent from "./JobSeekerRegisterComponent";
import JobSeekerLoginComponent from "./JobSeekerLoginComponent";
import HomeComponent from "./HomeComponent";
import EducationForm from "./EducationComponent";
import RecruiterLoginComponent from "./RecruiterLoginComponent";
import ExperienceForm from "./ExperienceComponent";
import RecruiterRegisterComponent from "./RecruiterRegisterComponent";
import AdminLoginComponent from "./AdminLoginComponent";
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
              path="/jobseeker/register"
              element={<JobSeekerRegisterComponent />}
            />
            <Route
              path="/recruiter/register"
              element={<RecruiterRegisterComponent />}
            />
            <Route
              path="/jobseeker/login"
              element={<JobSeekerLoginComponent />}
            />
            <Route path="/admin/login" element={<AdminLoginComponent />} />
            <Route
              path="/recruiter/login"
              element={<RecruiterLoginComponent />}
            />
            <Route path="/jobseeker/exp" element={<ExperienceForm />} />
            <Route path="/jobseeker/edu" element={<EducationForm />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
