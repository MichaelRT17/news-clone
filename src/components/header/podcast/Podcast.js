import React from 'react';
import podcastLogo from './the-daily-album-art-square320-v3.jpg';
import './podcast.css';

function Podcast() {
    return (
        <div>
            <div className='podcast-container'>
                <div>
                    <p className='podcast-title'>Listen to 'The Daily'</p>
                    <p className='podcast-description'>How Republicans created a pipeline of <br /> conservative judges.</p>
                </div>
                <img src={podcastLogo} alt='podcast logo' className='podcast-image' />
            </div>
            <div className='header-ending-block'>
                
            </div> 
        </div>
    )
}

export default Podcast;