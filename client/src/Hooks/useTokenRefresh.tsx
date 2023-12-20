import { useEffect } from "react";
import instance from "../services/api/axios.config";
import { refreshTokenRequest } from "../services";
import { authActions, useAuthStore } from "../services/store/auth.store";

export const useTokenRefresh = () => {
  const access_token = useAuthStore(state => state.accessToken);
  const { setAccessToken } = authActions

  console.log(access_token);

  useEffect(() => {
    let isMounted = true;

    const request = instance.interceptors.request.use(
      (request) => {
        console.log('Access Token:', access_token);

       const token = window.localStorage.getItem('access_token')

        if (access_token) {
          request.headers['Authorization'] = `Bearer ${token}`;
        }
        return request;
      },
      (error) => Promise.reject(error))

    const response = instance.interceptors.response.use(
      (response) => {
        console.log('respuesta valida', response);
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        console.log(originalRequest);

        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken') ?? '';
            const response = await refreshTokenRequest(refreshToken);
            // console.log(response.data, 'nuevo token');

            const { token } = response.data;
            setAccessToken(token);
            // console.log(access_token, 'verify');

            localStorage.setItem('access_token', token);
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return instance(originalRequest);

          } catch (error) {
            console.log('entro catch');

            console.log(error);
          }
        }
        return Promise.reject(error);
      }
    )

    return () => {
      isMounted = false;
      instance.interceptors.request.eject(request);
      instance.interceptors.response.eject(response);
    }
  }, [access_token, setAccessToken]);

  return instance;
}