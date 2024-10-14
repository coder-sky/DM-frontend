import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import UserContext from './UserContext';
import swal from 'sweetalert';
import instance from '../../api/axiosInstance';

function UserProvider(props) {
  const [userDetails, setUserDetails] = useState({id:'', client_name:'', username:'', email:'', company_logo:'', role:''})
  const [unAuth, setUnAuth] = useState(false)
  const [updateDetails, setUpdateDetails] = useState(0)
  const navigate = useNavigate()

  const token =  Cookies.get('ssid')

  useEffect(() => {

    if (token !== undefined ) {
      instance.get('/api/checkuser')
        .then(res => { 
          // console.log(res.data)         
          setUserDetails(res.data)
        })
        .catch(err => {

          if (err.response.data === "Unauthorized") {
            // console.log('hey', err)
            Cookies.remove('ssid')
            swal({
              title:'Unauthorized User',
              icon: "error",
            })
            setUnAuth(true)
          }
          else if(err.response.status===504){
            swal({
              title:'Error occured!',
              text:"Not able get data contact admin!",
              icon: "error",
            })
            
          }
          // console.log(err)
        })
    }

  }, [updateDetails,token])
  // console.log('context called')

  if (unAuth) {
    setUnAuth(false)
    // console.log('coming')

    return navigate('/login', { replace: true })
  }


  const handleUserDetails = () => {
    setUpdateDetails(prev=>prev+1)
  }

  return (
    <UserContext.Provider value={{ userDetails, handleUserDetails }}>

      {props.children}
      
    </UserContext.Provider>

  )
}

export { UserProvider };


