import React from 'react'
import { useLocation } from "react-router-dom"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
let HeroSection = () =>{
    let location = useLocation()
    return(
        <section className='Service_heroSection'>
            <div className='overlay'></div>
            <div className='textContainer'>
            <div className='titles'>
            <h1>{location.pathname.replace('/','')}</h1>
             </div>
                <span><ArrowDropDownCircleIcon className='icon' />Scroll Down</span>
            </div>
        </section>
    )
}

export default HeroSection