import { BACKEND_URL } from '@/config';
import axios from 'axios';
interface User {
  name: string;
  email: string;
  password: string;
}

type SignupUser = Pick<User, "name" | "email" | "password">;
type SigninUser = Pick<User, "name" | "password">;

export const signupUser = async (data: SignupUser) => {
  const response = await axios.post(`${BACKEND_URL}/user/signup`, data);
  return response.data;
};

export const siginUser = async (data: SigninUser) => {
  const response = await axios.post(`${BACKEND_URL}/user/signin`, data);
  return response.data;
};
