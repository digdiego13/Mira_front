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

function getRequisition(search) {
    const promise = axios.get(`${URL}/galeries?galery_name=${search}`)  
    return promise
}

function getArtists() {
    const promise = axios.get(`${URL}/artists`)  
    return promise
}

function getCartList(token) {
  const promise = axios.get(`${URL}/cart`, createHeaders(token));
  return promise;
}

function getCheckoutList(token) {
  const promise = axios.get(`${URL}/checkout`, createHeaders(token));
  return promise;
}

function postCancelItem(token, id) {
  const promise = axios.post(`${URL}/cart`, id, createHeaders(token));
  return promise;
}

function getArts() {
    const promise = axios.get(`${URL}/stock`)  
    return promise
}

function getGalleries() {
    const promise = axios.get(`${URL}/galeries`)  
    return promise
}

export {
    postLogin,
    postSignUp,
    getRequisition,
    getArtists,
    getArts,
    getGalleries,
    getCartList,
    postCancelItem,
    getCheckoutList
}
