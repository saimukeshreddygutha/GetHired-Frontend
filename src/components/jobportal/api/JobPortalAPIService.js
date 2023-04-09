import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
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

  export const addEduApi = (educationList, userId) =>
    apiClient.post(`jobseeker/${userId}/add-edu`, educationList);

  export const getJobSeekerId = (username) =>
    apiClient.get(`jobseeker/get-id/${username}`);