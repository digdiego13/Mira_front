import axios from "axios";
const URL = "https://localhost:4001";

// const createHeaders = (token) => {
//   return { headers: { Authorization: `Bearer ${token}` } };
// };

function postLogin(body) {
  const promise = axios.post(`${URL}/sign-in`, body);
  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${URL}/sign-up`, body);
  return promise;
}

function getOneGallery(param) {
  const promise = axios.post(`${URL}/gallery/${param}`);
  return promise;
}

export { 
  postLogin,
  postSignUp ,
  getOneGallery,
};
