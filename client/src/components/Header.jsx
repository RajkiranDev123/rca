import React from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
    const { user } = useSelector(state => state.userReducer)
    return (
        <div className="app-header">
            <div className="app-logo">
                <i className="fa fa-comments" aria-hidden="true"></i>
                Chat Now!
            </div>
            <div className="app-user-profile">
                <div className="logged-user-name">Hi,{user?.firstname}</div>
                <div className="logged-user-profile-pic">{user?.firstname[0]?.toUpperCase() + " " + user?.lastname[0]?.toUpperCase()}</div>
            </div>
        </div>
    )
}

export default Header