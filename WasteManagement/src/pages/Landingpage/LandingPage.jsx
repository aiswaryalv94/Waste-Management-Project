import React from 'react'
import image1 from '../../assets/landpagepic.jpg'
import './landingPage.css'
import waste from '../../assets/waste.jpg'
import waste1 from '../../assets/waste1.jpg'
import waste2 from '../../assets/waste2.jpg'    
function LandingPage() {
    return (
        <div>
            <div className='background-image-landingpage'>
                <img className="landing-page-image" src={image1} alt="?" />
            </div>
            <div className='firstline'>
                <p className='sustainabilty'>2025 Sustainabilty Report</p>
                <p className='we-are-driving'>We're Driving Sustainability</p>
                <div className='third-line'>
                    <p className='third-line-first'>We're working toward a future where materials are repurposed, energy is</p>
                    <p className='third-line-second'>renewable and communities are thriving.</p>
                </div>
            </div>


            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={waste} className="d-block w-10" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={waste1} className="d-block w-10" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={waste2} className="d-block w-10" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default LandingPage
