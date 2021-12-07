import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} aLt=''/>    
            
            </div>
            <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;