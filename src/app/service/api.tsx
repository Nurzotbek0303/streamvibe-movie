import axios from "axios";
import toast from "react-hot-toast";

const instance = axios.create({
  baseURL: "https://movie-app-ea86.onrender.com/",
  // withCredentials: true,  <-- endi keraksiz
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`; // JSON.parse qo'shildi
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Endi refresh token frontenddan yuboriladi
        const refreshToken = JSON.parse(
          localStorage.getItem("refresh_token") || "null"
        );
        if (!refreshToken) throw new Error("No refresh token");

        const response = await axios.post(
          "http://127.0.0.1:8000/auth/refresh",
          {
            refresh_token: refreshToken,
          }
        );

        const newAccessToken = response.data.access_token;
        localStorage.setItem("access_token", JSON.stringify(newAccessToken));

        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        console.log(refreshError);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        toast.error("Sessiya tugadi. Iltimos qayta kiring.");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
