import { Auth } from 'aws-amplify';
import axios from 'axios';
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config: any) => {
  let token = await getLocalToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error) => {
    console.log(
      'error => ',
      error?.response?.config?.url,
      error?.response?.status
    );
    throw error;
  }
);

getLocalToken();

async function getLocalToken() {
  try {
    var res = await Auth.currentSession();
    let accessToken = res.getIdToken().getJwtToken();
    return accessToken;
  } catch (error) {
    return '';
  }
}

export default axiosClient;
