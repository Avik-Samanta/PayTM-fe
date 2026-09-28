import { BACKEND_URL } from '@/config';
import axios from 'axios';
type SignupUser = {
  name: string;
  email: string;
  password: string;
}
export const signupUser = async (data: SignupUser) => {

  const response = await axios.post(`${BACKEND_URL}/user/signup`, data);
  return response.data;
};
