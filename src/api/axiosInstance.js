import axios from "axios"
import Cookies from 'js-cookie'

const token =  Cookies.get('ssid')

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACKEND_SERVER,
    headers: {
        'Authorization':`Bearer ${token}`
      },
 })


 export default instance