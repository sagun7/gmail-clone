import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import {useSelector} from 'react-redux';
import {logout, selectUser} from './features/userSlice'
import { auth } from './firebase';

import {useDispatch} from 'react-redux'

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    const signOut = () =>{
        auth.signOut().then(() =>{
            dispatch(logout());
        })
            
    }

  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://cdn-ics-png.flaticon.com/512/281/281769.png" alt="Internet not working" />
        </div>
        <div className="header__middle">
            <SearchIcon />
            <input type="text" placeholder='Search mail' />
            <ArrowDropDownIcon className='header__inputCaret' />
        </div>

        <div className="header__right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
               <NotificationsIcon />
            </IconButton>
            <IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </IconButton>
           

        </div>

       
       
    </div>
  )
}

export default Header