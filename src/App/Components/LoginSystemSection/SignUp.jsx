import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import {Link } from "react-router-dom"
import SignSecFrom from "./Sections/SignupForm"

function SetTheSavedData(){
    let UserData = localStorage.getItem("UserInformation")
    if(UserData){
        return JSON.parse(localStorage.getItem("UserInformation"))
    }
    else{
        return []
    }
}

let SignupSec = () =>{
    let [DisplayVal,SetDisplayVal] = React.useState(true)

    // making the state to Get The Value
    let [CurrentVal,SetCurrentVal] = React.useState({
        fullName:"",
        email:"",
        phonenumber:"",
        password:"",
    })
    // Making a State To Save The UserSaved Value to localStorage
    let [SaveData,SetSaveData] = React.useState(SetTheSavedData())

    // this funtion is used for get the value from user and save to another state
    function GetTheVal(e){
        const { name,value } = e.target
        SetCurrentVal((pervdata)=>{
            return{
                ...pervdata,
                [name]: value,
            }
        })
    }

    const SaveTheVal =()=>{
        SetSaveData(data => [...data , CurrentVal])
        SetCurrentVal({
            fullName:"",
            email:"",
            phonenumber:"",
            password:"",
        })
    }

    React.useEffect(()=>{
        localStorage.setItem("UserInformation",JSON.stringify(SaveData))
    })
 
    return(
        <section className='signUpSec' style={{zIndex:80}}>
            <div className='wapper'>
            <Link to={DisplayVal ? '/login' : ''}>
            <Tooltip title="Close" className='tooltip' arrow placement="top">
            <div className='closeButtonContainer'>
                <CancelRoundedIcon className='icon'/>
            </div>
           </Tooltip>
                </Link>
            <h1>SignUp Now</h1>

            <SignSecFrom GetTheValue={GetTheVal} CurrentValueOfState={CurrentVal} SaveTheUserData={SaveTheVal} />
            
            </div>
        </section>
    )
}

export default SignupSec