import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AuthProvider from "./security/AuthContext";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useAuth } from "./security/AuthContext";
import IntroComponent from "./IntroComponent";
import JobSeekerRegisterComponent from "./JobSeekerRegisterForm";
import { JobSeekerLoginComponent } from "./LoginForm";
import EducationForm from "./EducationForm";
import { RecruiterLoginComponent } from "./LoginForm";
import ExperienceForm from "./ExperienceForm";
import RecruiterRegisterComponent from "./RecruiterRegisterForm";
import { AdminLoginComponent } from "./LoginForm";
import JobAdForm from "./JobAdForm";
import RecruiterDashboard from "./RecruiterDashboard";
import ViewApplication from "./ViewApplication";
import ViewJobAdComponent from "./ViewJobAdComponent";
import JobSeekerDashboard from "./JobSeekerDashboard";
import LogoutComponent from "./LogoutComponent";
import JobApplicationsTable from "./JobApplicationsTable";
import JobAd from "./JobAd";
function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
}

function JSAuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated && authContext.role === "jobseeker") {
    return children;
  }

  return <Navigate to="/jobseeker/login" />;
}

function RCAuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated && authContext.role === "recruiter") {
    return children;
  }

  return <Navigate to="/recruiter/login" />;
}

export default function JobPortalApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <div className="jbptl">
          <Routes>
            <Route path="/jobad" element={<JobAd/>} />
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
            <Route
              path="/jobseeker/dashboard"
              element={
                <JSAuthenticatedRoute>
                  <JobSeekerDashboard />
                </JSAuthenticatedRoute>
              }
            />
            <Route
              path="/recruiter/:username/applications/:id"
              element={
                <RCAuthenticatedRoute>
                  <JobApplicationsTable />
                </RCAuthenticatedRoute>
              }
            />
            <Route
              path="/recruiter/dashboard"
              element={
                <RCAuthenticatedRoute>
                  <RecruiterDashboard />
                </RCAuthenticatedRoute>
              }
            />
            <Route path="/admin/login" element={<AdminLoginComponent />} />
            <Route
              path="/recruiter/login"
              element={<RecruiterLoginComponent />}
            />
            <Route
              path="/recruiter/:username/application/view/:id"
              element={
                <RCAuthenticatedRoute>
                  <ViewApplication />
                </RCAuthenticatedRoute>
              }
            />
            <Route
              path="/recruiter/:username/job/add"
              element={
                <RCAuthenticatedRoute>
                  <JobAdForm />
                </RCAuthenticatedRoute>
              }
            />
            <Route
              path="/jobseeker/:username/exp/add"
              element={
                <JSAuthenticatedRoute>
                  <ExperienceForm />
                </JSAuthenticatedRoute>
              }
            />
            <Route
              path="/jobseeker/:username/edu/add"
              element={
                <JSAuthenticatedRoute>
                  <EducationForm />
                </JSAuthenticatedRoute>
              }
            />
            <Route
              path="/recruiter/:username/jobad/view/:id"
              element={
                <RCAuthenticatedRoute>
                  <ViewJobAdComponent />
                </RCAuthenticatedRoute>
              }
            />
            <Route
              path="/jobseeker/:username/jobad/view/:id"
              element={
                <JSAuthenticatedRoute>
                  <ViewJobAdComponent />
                </JSAuthenticatedRoute>
              }
            />
            <Route path="/job-ads" element={<RecruiterDashboard />} />

            <Route path="/logout" element={<LogoutComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </AuthProvider>
  );
}
