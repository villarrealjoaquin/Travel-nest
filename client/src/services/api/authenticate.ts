import { User } from "../../models";
import { UserLogin } from "../../pages/Login/Login";
import instance from "./axios.config";

export const loginRequest = (user: UserLogin) => instance.post('/auth/login', user);
export const registerRequest = (user: User) => instance.post('/auth/signup', user);
export const refreshTokenRequest = (refreshToken: string | null) => instance.post('/auth/refresh', refreshToken);