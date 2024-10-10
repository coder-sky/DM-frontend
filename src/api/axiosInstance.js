import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    credentials: 'include',
    baseURL: process.env.REACT_APP_BACKEND_SERVER,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
 })


 export default instance