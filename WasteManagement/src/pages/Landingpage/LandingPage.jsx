import React from 'react'
import image1 from '../../assets/landpagepic.jpg'
import './landingPage.css'
function LandingPage() {
    return (
        <div>
            <div className='background-image-landingpage'>
                <img className="landing-page-image" src={image1} alt="?" />
            </div>
        </div>
    )
}

export default LandingPage
