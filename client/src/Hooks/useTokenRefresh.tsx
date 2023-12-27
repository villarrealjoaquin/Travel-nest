import { useEffect } from "react";
import instance from "../services/api/axios.config";
import { refreshTokenRequest } from "../services";
import { authActions, useAuthStore } from "../services/store/auth.store";

export const useTokenRefresh = () => {
  const access_token = useAuthStore(state => state.accessToken);
  const { setAccessToken } = authActions;

  useEffect(() => {
    let isMounted = true;

    const request = instance.interceptors.request.use(
      (request) => {
        const token = window.localStorage.getItem('access_token')

        if (token) {
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

        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken') ?? '';
            const response = await refreshTokenRequest(refreshToken);
            const { token } = response.data;

            if (isMounted) {
              setAccessToken(token);
              localStorage.setItem('access_token', token);
              originalRequest.headers.Authorization = `Bearer ${token}`;

              return instance(originalRequest);
            }
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