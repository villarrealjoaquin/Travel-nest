import { refreshTokenRequest } from ".";
import instance from "./axios.config";

export const axiosInterceptor = () => {
  instance.interceptors.request.use(
    (request) => {
      console.log(request);

      const token = localStorage.getItem('token');
      if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
      }
      return request;
    },
    (error) => Promise.reject(error))

  instance.interceptors.response.use(
    (response) => {
      console.log('respuesta valida', response);
      return response;
    },
    async (error) => {
      console.log('entre');
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = localStorage.getItem('refreshToken') ?? '';
          const response = await refreshTokenRequest(JSON.parse(refreshToken));
          const { token } = response.data;
          localStorage.setItem('token', token);
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return instance(originalRequest);
        } catch (error) {
          console.log(error);
        }
      }
      return Promise.reject(error);
    }
  )
}