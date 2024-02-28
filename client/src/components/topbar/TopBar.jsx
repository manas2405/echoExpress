import React from 'react'
import "./topbar.css"
import {Link} from "react-router-dom"

export default function TopBar() {
    const user = true;
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
                <li className = "topListItem"><Link to = "/" className = "link"> WRITE </Link></li>
                <li className = "topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className = "topRight">
        {
            user ? (
                <img 
                className = "topImg" 
                src = "https://w0.peakpx.com/wallpaper/409/730/HD-wallpaper-the-ultimate-fusion-dbz-dragon-ball-dragon-ball-super-dragon-ball-z-gogeta-thumbnail.jpg" alt = "" />
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
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
}
