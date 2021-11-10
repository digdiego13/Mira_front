import axios from "axios";
const URL = "http://localhost:4000";
//https://mirabackend.herokuapp.com
const createHeaders = (token) => {
   return { headers: { Authorization: `Bearer ${token}` } };
 };

function postLogin(body) {
  const promise = axios.post(`${URL}/sign-in`, body);
  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${URL}/sign-up`, body);
  return promise;
}

function getCartList (token){
  const promise = axios.get(`${URL}/cart`, createHeaders(token));
  return promise;
}

export { postLogin, postSignUp, getCartList };
