import React from 'react';
import background from '../asset/Home-page_background.jpeg'
import './HomeBackground.css'

const HomeBackground = () => {
    return (
        <div className='background-container'>
            <div className='background-img'>
                <img src={background} alt='Home background'></img>
            </div>
            <div className='background-title'>
                <h2>Home</h2>
            </div>
            
        </div>
    );
};

export default HomeBackground;