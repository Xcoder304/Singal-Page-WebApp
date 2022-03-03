import React from 'react'
import AboutSec from './Sections/AboutusSec'
import Header from "../../../Components/Header"
import Footer from "../../../Components/Footer"
import HeroSection from "./Sections/HeroSection"
import SubscriptionSec from "../../PagesSections/SubscriptionSec"

let AboutPage = () =>{
    return(
        <React.Fragment>
            <Header />
            <HeroSection />
            <AboutSec />
            <SubscriptionSec />
            <Footer />
        </React.Fragment>
    )
}

export default AboutPage