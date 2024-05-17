import React from 'react'
import './Concerts.css'
function Concerts() {
    return (
        <div className ='concert-container'>
            <div className="concert-header">
            Check out our next concert on June 1st!
            </div>
            <div className='concert-link'>
                <a href= 'https://www.ottosshrunkenhead.com/pages/events.php'> Click here for the link to the concert </a>
            </div>
        </div>
    )
}

export default Concerts;