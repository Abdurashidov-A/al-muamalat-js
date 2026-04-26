import axios from "axios";

const request = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  baseURL: "https://api.al-muamalat.uz/api",
  params: {},
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          "https://api.al-muamalat.uz/api/auth/refresh",
          {
            refreshToken: refreshToken,
          },
        );
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        return axios(error.config);
      } catch {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export { request };
