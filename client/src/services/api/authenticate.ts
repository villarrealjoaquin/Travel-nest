import { User } from "../../models";
import instance from "./axios.config";

export const loginRequest = (user: User) => instance.post('auth/login', user);
export const registerRequest = (user: User) => instance.post('auth/signup', user);