import axios from "axios"
import Cookies from 'js-cookie'


const token =  Cookies.get('ssid')

console.log('from instance', token)





const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACKEND_SERVER,
    headers: {
        'Authorization':`Bearer ${Cookies.get('ssid')}`
      },
 })

 export default instance

