import React from 'react'
import Navbar from './Navbar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Link} from "react-router-dom"
import { Button } from '@mui/material'

let Header = () =>{
    let [DisplayVal,SetDisplayVal] = React.useState(true)
    let [ChangeTheProp,SetProp] = React.useState(true)

    return(
        <>
        <React.Fragment>
    <header className='header'>
           <Link to='/'>
            <div className='logo'>
                <img src='../Images/logo.png' />
            </div>
           </Link>
            <Navbar CurrentState={ChangeTheProp} />

            <div className="signupSec">
        <div className='button'>
        <Link to={DisplayVal ? '/login' : ''}> 
        <Button onClick={()=>SetDisplayVal(!DisplayVal)} className='btn' variant="outlined">
            Login Now
        </Button>
        </Link>
        </div>
        </div>

            <div className='hamburgarContainer' onClick={()=>SetProp(data=> !data)}>
                <div className='wapper'>
                    {ChangeTheProp ? <MenuRoundedIcon className='icon' /> : <CloseRoundedIcon className='icon' />}
                </div>
            </div>
        </header>
        </React.Fragment>
        </>

    )
}

export default Header

