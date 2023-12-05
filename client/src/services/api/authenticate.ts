import instance from './axios.config';

const api = {
  loginRequest: (user) => instance.post('/login', user)
}

export default api;