import axios from "axios";
const URL = 'http://localhost:4000';

const createHeaders = (token) => {
    return { headers: { Authorization: `Bearer ${token}` } };
}

function getRequisition (search) {
    const promise = axios.get("")  
    return promise
}

export {
    getRequisition,    
}