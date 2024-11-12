import React from 'react'
import './Home.css'
import image from '../../../images/Cupid-Logo.png'
import { NavLink } from 'react-router-dom';

function Concerts() {
    return (
        <div className ='concert-container'>
            <ul>
                <li>
                    <img src={image}></img>
                </li>
                <li className = "cupid-header">
                    <NavLink to="/" className="nav-link">
                        Cupid's Nemesis
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/releases" className="nav-link">
                        Releases
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shows" className="nav-link">
                        Upcoming Shows
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop" className="nav-link">
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.instagram.com/ilovecupidsnemesis/">
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="https://open.spotify.com/artist/1NBKb8zhk8wxRabG4kAJ5q?si=5Y7liv9GTLSm34wVIWSCWg">
                        Spotify
                    </a>
                </li>
                <li>
                    <a href="https://cupidsnemesis.bandcamp.com/">
                        Bandcamp
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCTZisPMFdWlNH3EV-StRZzA">
                        Youtube
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCTZisPMFdWlNH3EV-StRZzA">
                        SoundCloud
                    </a>
                </li>
                <li>
                    <a href="https://music.apple.com/us/artist/cupids-nemesis/1634171848">
                        Apple Music
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Concerts;