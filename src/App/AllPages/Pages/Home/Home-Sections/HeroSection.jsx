import React from 'react'
import HeroSecData from "./Data/HeroSec"

let HeroSection = () =>{
    return(
        <section className='HeroSection'>
            <div className='info'>
                {
                    HeroSecData.map((data)=>{
                        return(
                            <>
                            <h1>{data.title}</h1>
                            <span>{data.sptitle}</span>
                            <div className='buttonContainer'>
                                <button>
                                    <div className='subcontainer'></div>
                                    learn more</button>
                            </div>
                            </>
                        )
                    })
                }
               
            </div>
        </section>
    )
}

export default HeroSection