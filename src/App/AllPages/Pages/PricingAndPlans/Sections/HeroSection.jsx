import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useLocation } from 'react-router-dom';
let HeroSection = () =>{
    return(
        <section className='Service_heroSection'>
            <div className='overlay'></div>
            <div className='textContainer'>
                <h1>Our Price & Plans</h1>
                <span><ArrowDropDownCircleIcon className='icon' />Scroll Down</span>
            </div>
        </section>
    )
}

export default HeroSection