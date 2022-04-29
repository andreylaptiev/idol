import { authReq } from "../axios/instances";
import jwt_decode from 'jwt-decode';

const TOKEN = 'token';

const getToken = () => localStorage.getItem(TOKEN);

const removeToken = () => localStorage.removeItem(TOKEN);

// token contains user id and role
export const decodeToken = () => {
  try {
    const token = getToken();
    const decodedToken = jwt_decode(token);
    return decodedToken;
  } catch (err) {
    // in case of trouble with token
    // return an empty object to use it with setUser()
    // most likely token is just absent. It is removed if
    // user clicked Log Out button or if his token is not verified by server
    return {};
  }
}

const checkAuth = async () => {
  const token = getToken();
  // if we have token then verify it on server
  if (token) {
    try {
      // send request with token in headers.Autorization field
      const res = await authReq.get('/users/auth');
      if (res.data.message === 'Success') return true;
      // if message from server is not 'Success'
      // then token is most likely expired
      // delete it from local storage
      removeToken();
      return false;
    } catch(err) {
      console.error(err);
    }
  }
  // if no token in local storage then user in not authenticated
  return false;
}

export default checkAuth;
