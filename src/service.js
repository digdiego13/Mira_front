import axios from "axios";
const URL = "https://git.heroku.com/mirabackend.git";

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

function getRequisition(search) {
    const promise = axios.get(`localhost:4001/galery_name=${search}`)  
    return promise
}

function getArtists() {
    const promise = axios.get("http://localhost:4001/artists")  
    return promise
}

function getArts() {
    const promise = axios.get("http://localhost:4001/stock")  
    return promise
}

function getGalleries() {
    const promise = axios.get("http://localhost:4001/galeries")  
    return promise
}

export {
    postLogin,
    postSignUp,
    getRequisition,
    getArtists,
    getArts,
    getGalleries,
}
