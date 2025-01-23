import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export const signIn = async (userData: LoginUser) => {
  const response = await axios.post(
    `${API_BASE_URL}/api/user/login`,
    userData,
    {
      withCredentials: true,
    }
  );
  const resBody = response?.data;

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return resBody;
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/user/register`,
      userData,
      {
        withCredentials: true,
      }
    );
    const resBody = response?.data;

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    return resBody;
  } catch (error) {
    console.error('Error', error);
  }
};

export const validateToken = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/user/validate-token`,
      { withCredentials: true }
    );
    // console.log(response, 'validateToken');
    return response;
  } catch (error) {
    toast.error('Please Login to continue');
    console.log(error);
  }
};

export const fetchCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/user/`, {
      withCredentials: true,
    });
    // console.log(response.data, 'user');
    return response.data;
  } catch (error) {
    // toast.error('Please Login to continue');
    console.log(error);
  }
};

export const logoutUser = async () => {
  const response = await axios.delete(`${API_BASE_URL}/api/user/logout`, {
    withCredentials: true,
  });
  console.log(response);
  if (response.statusText !== 'OK') {
    throw new Error('Error during signout');
  }
};
