import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { manageUser } from '../services'

function AuthGuard() {
    return (manageUser('get', "token") ? <Outlet /> : <Navigate to="/" />)
}

export default AuthGuard