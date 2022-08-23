import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {LOGIN} from '../config/routes/paths';
import {useAuthContext} from '../contexts/authContext'

function ProfileRoute() {
    const {isAuthenticated} = useAuthContext();
    if (!isAuthenticated) {
        return <Navigate to={LOGIN}/>;
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProfileRoute
