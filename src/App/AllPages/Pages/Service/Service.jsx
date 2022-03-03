import React from 'react'
import Header from "../../../Components/Header"
import HeroSection from "./Sections/HeroSection"
import ServicesSec from "../../PagesSections/ServiceSection"
import DataServiceSec from "./Sections/DataServiceSec"
import SubscriptionSec from "../../PagesSections/SubscriptionSec"
import Footer from "../../../Components/Footer"

let ServicePage = () =>{
    return(
        <React.Fragment>
          <Header />
          <HeroSection />
          <ServicesSec />
          <DataServiceSec />
          <SubscriptionSec />
          <Footer />
        </React.Fragment>
    )
}

export default ServicePage