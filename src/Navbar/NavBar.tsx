
import React, { useState, useEffect, } from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom';
import cupidLogo  from '../images/Cupid-Logo.png'
function NavBar() {
    // Screen width setter
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    //Screen Width Listener
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    return (
        <nav className="navbar">
            <img src={cupidLogo} className = "image-container"></img>
        </nav>
    )
}

export default NavBar;