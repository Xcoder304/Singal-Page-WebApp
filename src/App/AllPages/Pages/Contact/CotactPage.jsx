import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import HeroSection from './Sections/HeroSection'
import ContactUsSec from "./Sections/ContactUsSec"
import SubscriptionSec from '../../PagesSections/SubscriptionSec'

const ContactPage = () =>{
    return(
        <React.Fragment>
            <Header />
            <HeroSection />
            <ContactUsSec />
            <SubscriptionSec />
            <Footer />
        </React.Fragment>

    )
}

export default ContactPage