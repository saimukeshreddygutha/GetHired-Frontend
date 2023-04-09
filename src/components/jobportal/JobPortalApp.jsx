import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AuthProvider from "./security/AuthContext";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useAuth } from "./security/AuthContext";
import IntroComponent from "./IntroComponent";
import JobSeekerRegisterComponent from "./JobSeekerRegisterComponent";
import { JobSeekerLoginComponent } from "./LoginForm";
import HomeComponent from "./HomeComponent";
import EducationForm from "./EducationComponent";
import { RecruiterLoginComponent } from "./LoginForm";
import ExperienceForm from "./ExperienceComponent";
import RecruiterRegisterComponent from "./RecruiterRegisterComponent";
import { AdminLoginComponent } from "./LoginForm";
import JobAdComponent from "./JobAdComponent";
import RecruiterDashboard from "./RecruiterDashboard";
function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default function JobPortalApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container bg-light jbptl">
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
            <Route path="/recruiter/:id/add-job" element={<JobAdComponent />} />
            <Route path="/jobseeker/exp" element={<ExperienceForm />} />
            <Route path="/jobseeker/edu" element={<EducationForm />} />
            <Route path="/job-ads" element={<RecruiterDashboard />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </AuthProvider>
  );
}
