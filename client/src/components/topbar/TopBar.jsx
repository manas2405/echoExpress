import React from 'react'
import "./topbar.css"
import {Link} from "react-router-dom"
import { Context } from '../../context/Context';
import { useContext } from 'react';
import { BACKEND_URL, PF } from '../../apiPaths';

export default function TopBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type : "LOGOUT"});
    };

    return <div className = "top" > 
        <div className = "topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest-p"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className = "topCenter">
            <ul className = "topList">
                <li className = "topListItem"><Link to = "/" className = "link"> HOME </Link></li>
                <li className = "topListItem"><Link to = "/" className = "link"> ABOUT </Link></li>
                <li className = "topListItem"><Link to = "/" className = "link"> CONTACT </Link></li>
                <li className = "topListItem"><Link to = "/write" className = "link"> WRITE </Link></li>
                <li className = "topListItem" onClick = {handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className = "topRight">
        {
            user ? (
                <Link to = "/settings">
                    <img 
                    className = "topImg" 
                    src = {PF + user.profilePic} alt = "" />
                </Link>
            ) : (
            <ul className = "topList">
                <li className = "topListItem">
                    <Link className = "link" to = "/login"> LOGIN </Link>
                </li>
                <li className = "topListItem">
                <Link className = "link" to = "/register">REGISTER</Link>
                </li>
            </ul>
            )
        }
        </div>
    </div>
}


