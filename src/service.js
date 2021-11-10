import axios from "axios";
const URL = 'http://localhost:4000';

const createHeaders = (token) => {
    return { headers: { Authorization: `Bearer ${token}` } };
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
    getRequisition,
    getArtists,
    getArts,
    getGalleries
}