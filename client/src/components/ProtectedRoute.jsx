import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLoggedUser } from '../apiCalls/user'

import { useDispatch } from "react-redux"
import { setUser } from "../redux/userSlice"

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const getLoggedInUser = async () => {
        let response = null
        try {
            response = await getLoggedUser()
            if (response.success) {
                dispatch(setUser(response.data))
            } else {
                navigate("/login")
            }
        } catch (error) {
            navigate("/login")
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getLoggedInUser()
        } else {
            navigate("/login")
        }
    }, [])
    return (
        <div>
 
            {children}
        </div>
    )
}

export default ProtectedRoute