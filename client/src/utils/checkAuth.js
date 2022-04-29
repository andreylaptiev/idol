import { authReq } from "../axios/instances";

const getToken = () => localStorage.getItem('token');

const removeToken = () => localStorage.removeItem('token');

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
