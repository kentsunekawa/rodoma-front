import axios from 'axios';

export const axios_app = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {'Content-Type': 'application/json'}
  });
}


export const axios_auth = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  })
};

