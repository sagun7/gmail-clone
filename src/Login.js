import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { login } from './features/userSlice';

import { Button } from '@mui/material';

import {useDispatch} from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();
    
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) =>{
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                }))
            }).catch(error => alert(error.message));
    }

  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png" alt="no internet conneciton" />
        </div>
        <Button variant='contained' color='primary' onClick={signIn}> Login </Button>


    </div>
  )
}

export default Login