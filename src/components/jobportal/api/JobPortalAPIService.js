import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const pyClient = axios.create({
  baseURL: "http://localhost:5000",
});

export const executeBasicAuthenticationService = (token) =>
  apiClient.get("/auth", {
    headers: {
      Authorization: token,
    },
  });

export const addJobseekerApi = (joseeker) =>
  apiClient.post("jobseeker/add", joseeker);

export const addUserApi = (user) => apiClient.post("user/register", user);

export const addEduApi = (educationList, username) =>
  apiClient.post(`jobseeker/${username}/edu/add`, educationList);

export const getJobSeekerId = (username) =>
  apiClient.get(`jobseeker/get-id/${username}`);

export const usernameApi = (username) => apiClient.get(`user/${username}`);

export const addExpApi = (experienceList, username) =>
  apiClient.post(`jobseeker/${username}/exp/add`, experienceList);

export const getEduApi = (username) =>
  apiClient.get(`jobseeker/${username}/edu/get`);

export const getAllJobAds = (username) =>
  apiClient.get(`jobseeker/${username}/jobads/all`);

export const addRecruiter = (recruiter) =>
  apiClient.post("/recruiter/add", recruiter);

export const addJobAd = (username, jobAd) =>
  apiClient.post(`/recruiter/${username}/job/add`, jobAd);

export const getRecruiterId = (username) =>
  apiClient.get(`recruiter/get-id/${username}`);

export const getRecruiterJobAds = (username) =>
  apiClient.get(`recruiter/${username}/jobads/all`);

export const getJobAd = (id) => apiClient.get(`jobads/get/${id}`);

export const applyForJob = (username, id, details) =>
  apiClient.post(`/jobseeker/${username}/jobads/${id}/apply`, details);

export const getJobApplicationsByJobId = (username, id) =>
  apiClient.get(`recruiter/${username}/applications/jobad/${id}`);

export const getApplicationByApplicationId = (username, id) =>
  apiClient.get(`recruiter/${username}/application/${id}`);

export const getRank = (details) => pyClient.post("/rank", details);

export const getSortedJobads = (details) => pyClient.post("/sort_ads", details);

export const getAllAppliedJobs = (username) =>
  apiClient.get(`jobseeker/${username}/applied`);

export const uploadFiletoPy = (params) => pyClient.post("/fileupload", params);

export const getAllJS = () => apiClient.get("/admin/all-jobseeker");

export const getAllRec = () => apiClient.get("/admin/all-recruiter");