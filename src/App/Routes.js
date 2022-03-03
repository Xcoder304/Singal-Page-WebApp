import React from 'react'
import { Route,Routes } from "react-router-dom"
import HomePage from "./AllPages/Pages/Home/Home"
import ServicePage from "./AllPages/Pages/Service/Service"
import PrincingAndPlans from "./AllPages/Pages/PricingAndPlans/PricingAndPlans"
import AboutPage from "./AllPages/Pages/About/AboutPage"
import Contactus from "./AllPages/Pages/Contact/CotactPage"
import LoginPage from './Components/LoginSystemSection/LoginSec'
import SignPage from "./Components/LoginSystemSection/SignUp"
import PageNotFounded from "./AllPages/Pages/Page404/Page404"

let Routers = () =>{
    return(
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/pricingandplans" element={<PrincingAndPlans />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path='/login'  element={<LoginPage />}/>
          <Route path='/signup' element={<SignPage />} />
          <Route path='*' element={<PageNotFounded />} />

      </Routes>
    )
}

export default Routers