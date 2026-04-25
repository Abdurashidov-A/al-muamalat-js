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
  handleResend: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);
  const [email, setEmailData] = useState("");

  const handleLogin = (params) => {
    setLoading(true);
    request
      .post("/v2/auth/signin/init", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setUser(response.data.user);
        setEmailData(response.data?.email);
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
    return request
      .post("/v2/auth/signup/init", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setUser(response.data.user);
        setEmailData(response.data?.email ?? params.email);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleVerify = ({ email, otp }) => {
    request
      .post("/v2/auth/signup/verify", { email, otp })
      .then((response) => {
        localStorage.removeItem("verifyEmail");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });
  };

  const handleResend = () => {
    request
      .post("/v2/auth/signup/resend")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error))
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
    resend: handleResend,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
