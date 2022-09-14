import React from 'react';
import Header from './Header.js'
import Sidebar from './Sidebar.js'


import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Mail from './Mail.js';
import EmailList from './EmailList.js';

import './App.css';
import SendMail from './SendMail.js';
import {useSelector} from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice.js';
import {selectUser} from './features/userSlice'

import {useDispatch} from 'react-redux';
import { useEffect } from 'react';

import Login from './Login';
import { auth } from './firebase'
import {login} from './features/userSlice'

function App() {
const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
const user = useSelector(selectUser);
const dispatch = useDispatch()

useEffect(() =>{
  auth.onAuthStateChanged((user) =>{
    if(user){
      dispatch(login({
        displayName: user.displayName,
        email: user.email,

      }))
    }
    
  })
},[])

  return (
  
   
 <BrowserRouter>
  { !user ? (<Login />) : (<div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
       
          <Routes>
            <Route path="/mail" element={<Mail />} />
           <Route path="/" element={<EmailList />} />
          </Routes>
        </div>

        {sendMessageIsOpen &&<SendMail /> }

      </div> )}

      
    </BrowserRouter> 
  );
}

export default App;
