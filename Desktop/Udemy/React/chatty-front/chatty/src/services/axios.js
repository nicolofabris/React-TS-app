import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/API/V1`

export default axios.create({
    baseUrl: BASE_URL,
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    withCredentials: true
})