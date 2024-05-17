import { Row, Col } from 'react-grid-system';
import React from 'react';
import bandcamp from '../Icons/Bandcamp.png'
import instagram from '../Icons/InstagramCircle.png'
import apple from '../Icons/Music.png'
import spotify from '../Icons/Spotify.png'
import youtube from '../Icons/YouTube.png'
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
                            <a href = "https://www.linkedin.com/in/michael-lee-4955699b/">
                            <img className ="images" src = {spotify} alt = "spotify"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://github.com/mjl776">
                            <img className ="images" src = {instagram} alt = "instagram"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://www.instagram.com/_michaeljlee_/">
                            <img className ="images" src = {apple} alt = "apple"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://www.instagram.com/_michaeljlee_/">
                            <img className ="images" src = {youtube} alt = "youtube"></img></a>
                        </Col>
                        <Col xs= {2} sm = {2} md ={2}>
                            <a href = "https://www.instagram.com/_michaeljlee_/">
                            <img className ="images" src = {bandcamp} alt = "bandcamp"></img></a>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Social;