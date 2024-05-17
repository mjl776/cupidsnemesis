
import React, { useState, useEffect, } from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom';

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
            <a href="/" className="nav-branding"> Cupids Nemesis </a>
        </nav>
    )
}

export default NavBar;