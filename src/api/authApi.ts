import apiClient from './apiClient';
// fix send in types
interface LoginPayload {
  username: string;
  password: string;
}

export const login = (payload: LoginPayload) => {
  return apiClient.post('/auth/login', payload);
};

export const logout = () => {
  return apiClient.post('/auth/logout');
};
