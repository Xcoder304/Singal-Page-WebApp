import { Button } from '@mui/material'
import React from 'react'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Tooltip from '@mui/material/Tooltip';
import {Link} from "react-router-dom"

// Get The Value from the localStorage

let LoginSec = () =>{
    let [DisplayVal,SetDisplayVal] = React.useState(true)
    
    let [UserVal,SetUserVal] = React.useState({
        email:"",
        password:"",
    })

    let CheckTheSavedVal = ()=>{
        let GetTheInfo = JSON.parse(localStorage.getItem("UserInformation"))
        GetTheInfo.map((data)=>{
            if(UserVal.email == data.email && UserVal.password == data.password){
                return alert('good')
            }
            else{
                return alert('sorry')
            }
        })
    }
    let [CheckTheData,SetTheCheckData] = React.useState([])

    let GetTheVal=(e)=>{
        let { name,value } = e.target
        SetUserVal((pervdata)=>{
            return{
                ...pervdata,
                [name]:value
            }
        })
    }

    let LoginTheUser =()=>{
        SetTheCheckData(data => [...data , UserVal])
        CheckTheSavedVal()
    }


    return(
        <>

        <section className='loginSection' >
        <div className='wapper'>
            
        <Link to={DisplayVal ? '/' : '/login'}>

            <Tooltip title="Close" className='tooltip' arrow placement="top">

            <div className='closeButtonContainer'>
                <CancelRoundedIcon className='icon'/>
            </div>

        </Tooltip>
        </Link>
   
        <h1>Login here</h1>

        <form onSubmit={(e)=>e.preventDefault()}>
            
            <input type="email" placeholder='enter your email' required autoComplete='off' onChange={GetTheVal} name='email' value={UserVal.email} />
            <input type="password" placeholder='enter password' required autoComplete='off'  onChange={GetTheVal} name='password' value={UserVal.password} />
            <div className='buttonContainer'>
                <Button className='btn' onClick={LoginTheUser}>Login</Button>
            </div>
        </form>
        <Tooltip title="SignUp Now" className='tooltip' arrow followCursor>
        <div className='elseSec'>
            <Link to='/signup'><span>Create your account</span></Link>
        </div>
        </Tooltip>
        </div>
    </section>
        </>
    )
}

export default LoginSec