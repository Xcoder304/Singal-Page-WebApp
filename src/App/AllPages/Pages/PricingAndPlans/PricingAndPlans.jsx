import React from 'react'
import Header from "../../../Components/Header"
import HeroSection from "./Sections/HeroSection"
import PricingSection from './Sections/PricingSec'
import MoreUpdates from "../../PagesSections/PaymentSec"
import SaveMoneySec from "./Sections/SaveMoneySec"
import SubscriptionSec from "../../PagesSections/SubscriptionSec"
import Footer from "../../../Components/Footer"

const PricingAndPlansPage = () =>{
    return(
        <React.Fragment>
            <Header />
            <HeroSection />
            <PricingSection />
            <MoreUpdates />
            <SaveMoneySec />
            <SubscriptionSec />
            <Footer />
        </React.Fragment>
    )
}

export default PricingAndPlansPage