import { createContext, useContext, useState } from "react";
import {
  apiClient,
  executeBasicAuthenticationService,
  getJobSeekerId,
} from "../api/JobPortalAPIService";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  async function login(username, password, role) {
    const baToken = "Basic " + window.btoa(username + ":" + password);
    try {
      const response = await executeBasicAuthenticationService(baToken);

      if (response.status == 200) {
        setToken(baToken);
        setAuthenticated(true);
        setUsername(username);
        setRole(role);

        apiClient.interceptors.request.use((config) => {
          config.headers.Authorization = baToken;
          return config;
        });
        const userId = await getJobSeekerId(username);
        setUserId(userId);
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        login,
        logout,
        username,
        token,
        role,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
