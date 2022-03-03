import React from 'react'
import { Link } from "react-router-dom"
let Navbar = (props) =>{

    return(
        <nav className={props.CurrentState ? 'navBar' : 'navBar active'}>
        <ul>
            <Link to='/' className='navbar_items'><li>home</li></Link>
            <Link to='/service' className='navbar_items'><li>Services</li></Link> 
        <Link to='/pricingandplans' className='navbar_items dropdownParent'>
        <li>Pricing & Plans
            <div className='dropdowncontainer'>
            <div className='dropdown'>
             <ul className='dropdownMenu'>
                <li>All Plans</li>
                <li>Buy Plans</li>
                <li>future  Plans</li>
             </ul>
            </div>
            </div>
        </li>
        </Link> 
            <Link to='/about' className='navbar_items'><li>About</li></Link> 
            <Link to='/contact' className='navbar_items'><li>Contact us</li></Link> 
        </ul>
    </nav>
    )
}

export default Navbar