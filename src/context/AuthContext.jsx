import { createContext, useState } from "react";
import { request } from "../services/request";

const defaultProvider = {
  user: null,
  loading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  handleVerify: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);

  const handleLogin = (params) => {
    setLoading(true);
    request
      .post("/v2/auth/signin/init", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRegister = (params) => {
    setLoading(true);
    request
      .post("/v2/auth/signup/init", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleVerify = (params) => {
    request
      .post("v2/auth/signin/verify", params)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });
  };

  const values = {
    user,
    loading,
    login: handleLogin,
    register: handleRegister,
    verify: handleVerify,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
