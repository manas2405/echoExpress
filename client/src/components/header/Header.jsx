import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className = "header">
        <div className = "headerTitles">
            <span className = "headerTitleSm"> Echo </span>
            <span className = "headerTitleLg"> Express </span>
        </div>
        <img className = "headerImg" src = "https://www.jessleephotos.com/images/xl/typsp1-1740.jpg" alt = ""/>
    </div>
  )
}

