import React from 'react'
import Button from "@mui/material/Button"
import {Link } from "react-router-dom"


const SignupForm = (props) => {
  return (
    <form>
                <input type="text" placeholder='FullName' name='fullName' onChange={props.GetTheValue} name='fullName' value={props.CurrentValueOfState.fullName} />
                <input type="email" placeholder='Email' name='email' onChange={props.GetTheValue} name='email' value={props.CurrentValueOfState.email} />
                <input type="number" placeholder='Phone Number' name='phonenumber' onChange={props.GetTheValue} name='phonenumber'  value={props.CurrentValueOfState.phonenumber} />
                <input type="password" placeholder='password' name='password' onChange={props.GetTheValue} name='password' value={props.CurrentValueOfState.password} />
                {/* <input type="password" placeholder='comfirm password' onChange={GetTheVal} /> */}

                <div className='buttonContainer'>
                    <Button className='btn' onClick={props.SaveTheUserData}>
                        Sign Now
                    </Button>
                    <Link to='/login'>
                        <Button className='btn'>
                            Back To Login
                     </Button>
                    </Link>
                </div>
            </form>
  )
}

export default SignupForm