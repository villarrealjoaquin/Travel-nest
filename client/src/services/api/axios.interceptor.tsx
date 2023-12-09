import { AxiosRequestConfig } from "axios"
import instance from "./axios.config"

export const axiosInterceptor = () => {
  instance.interceptors.request.use((request: AxiosRequestConfig) => {
    
  })
}