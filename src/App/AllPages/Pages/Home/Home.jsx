import React from 'react'
import Header from "../../../Components/Header"
import HeroSection from "./Home-Sections/HeroSection"
import ServiceSection from "../../PagesSections/ServiceSection"
import PricingSection from "../../PagesSections/PricingplansSection"
import PaymentSec from "../../PagesSections/PaymentSec"
// import ReviewSec from "./Sections/ReviewSection"
import SubscriptionSec from "../../PagesSections/SubscriptionSec"
import FooterSec from "../../../Components/Footer"
import Styles from "../../../Styles/main.css"

let Home = () =>{

    return(
        <React.Fragment>
        <Header />
        <HeroSection />
        <ServiceSection />
        <PricingSection />
        <PaymentSec />
        {/* <ReviewSec /> */}
        <SubscriptionSec />
        <FooterSec />
        </React.Fragment>
    )
}

export default Home     