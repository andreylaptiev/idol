import axios from 'axios';

// instance for default requests that do not require authorization
const defReq = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 5000
});

// instance for authorized requests
const authReq = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 5000
});

// interceptor merges authorization header into request config
// token stored in local storage is sent from server when user logs in
const authInterceptor = config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
}

authReq.interceptors.request.use(authInterceptor);

export { defReq, authReq };
