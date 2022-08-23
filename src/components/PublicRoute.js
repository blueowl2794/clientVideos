import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {PROFILE} from '../config/routes/paths';
import {useAuthContext} from '../contexts/authContext'

function PublicRoute() {
    const {isAuthenticated} = useAuthContext();
    if (isAuthenticated) {
        return <Navigate to={PROFILE}/>;
    }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PublicRoute
