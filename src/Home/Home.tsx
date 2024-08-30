import React from 'react'
import './Home.css'
import image from '../images/Cupid-Logo.png'
function Concerts() {
    return (
        <div className ='concert-container'>
            <ul>
                <li>
                    <img src={image}></img>
                </li>
                <li className = "cupid-header">
                    <a href="/">
                        Cupid's Nemesis
                    </a>
                </li>
                <li>
                    <a href="/releases">
                        Releases
                    </a>
                </li>
                <li>
                    <a href="/shows">
                        Upcoming Shows
                    </a>
                </li>
                <li>
                    <a href="/shop">
                        Shop
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        Contact
                    </a>
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