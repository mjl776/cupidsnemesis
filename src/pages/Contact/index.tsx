import React from 'react'
import image from "../images/white_suit_cupids.png"
import './Contact.css'
function Contact() {
    return (
        <div className='contact-page'>
            <img className="contact-image" src={image}/>
            <div className='contact-text'> Feel free to shoot us a email at <a className="email-tag"href="mailto:ilovecupidsnemesis@gmail.com"> ilovecupidsnemesis@gmail.com</a>
            </div>
        </div>
    )
}

export default Contact;