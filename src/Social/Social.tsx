import { Row, Col } from 'react-grid-system';
import React from 'react';
import bandcamp from '../Icons/Bandcamp.png'
import instagram from '../Icons/InstagramCircle.png'
import apple from '../Icons/Music.png'
import spotify from '../Icons/Spotify.png'
import youtube from '../Icons/YouTube.png'
import tiktok from '../Icons/TikTok.png'

import './Social.css'
function Social() {
    return (
        <div className = "social-container">
            <div className = "social-content">
                <div>
                    Check out our Links!!!
                </div>
                <div className = "images-container">
                    <Row align = "center">
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://open.spotify.com/artist/1NBKb8zhk8wxRabG4kAJ5q?si=5Y7liv9GTLSm34wVIWSCWg">
                            <img className ="images" src = {spotify} alt = "spotify"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://www.tiktok.com/discover/cupids-nemesis/">
                            <img className ="images" src = {tiktok} alt = "tiktok"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://www.instagram.com/ilovecupidsnemesis/">
                            <img className ="images" src = {instagram} alt = "instagram"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://music.apple.com/us/artist/cupids-nemesis/1634171848">
                            <img className ="images" src = {apple} alt = "apple"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://www.youtube.com/channel/UCTZisPMFdWlNH3EV-StRZzA">
                            <img className ="images" src = {youtube} alt = "youtube"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://cupidsnemesis.bandcamp.com/">
                            <img className ="images" src = {bandcamp} alt = "bandcamp"></img></a>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Social;