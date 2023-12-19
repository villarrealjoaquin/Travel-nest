import { useEffect } from "react";
import instance from "../services/api/axios.config";
import { refreshTokenRequest } from "../services";
import { authActions, useAuthStore } from "../services/store/auth.store";
import Cookies from 'js-cookie';

export const useTokenRefresh = () => {
  const access_token = useAuthStore(state => state.accessToken);
  const { setAccessToken } = authActions
  const cookie = Cookies.get('refresh_token')
  console.log(cookie);
  

  useEffect(() => {
    const request = instance.interceptors.request.use(
      (request) => {
        console.log('Access Token:', access_token);        
        console.log(request);

        if (access_token) {
          request.headers['Authorization'] = `Bearer ${access_token}`;
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
        console.log('entre');

        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken') ?? '';
            const response = await refreshTokenRequest(JSON.parse(refreshToken));
            const { token } = response.data;
            setAccessToken(token);
            Cookies.set('accessToken', token);
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

    return () => {
      instance.interceptors.request.eject(request);
      instance.interceptors.response.eject(response);
    }
  }, [access_token]);

  return instance;
}