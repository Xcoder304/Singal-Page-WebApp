import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';

import {Abouts} from "./Data/FooterData"
import {ContactInfo} from "./Data/FooterData"
import { ConfirmationNumberSharp } from '@mui/icons-material'

const FooterSec = () =>{
    let [AboutData,SetAboutData] = React.useState(Abouts)
    // let [ContactData,SetContactData] = React.useState(ContactInfo)

    return(
        <section className='footerSection'>
            <div className='wapper'>

                <div className='about_us_part'>
                    <h1>about us</h1>
                    <p>{AboutData.map(data => data.text)}</p>

                    <div className='logo'>
                     <img src={AboutData.map(data => data.image)} />
                    </div>
                </div>

                <div className='contact_info_part'>
                    <h1>contact info</h1>
                    {
                        ContactInfo.map(data=>{
                            return(
                                <ContactInfoPart key={data.id} {...data} />
                            )
                        })
                    }
                </div>

                <div className='mediaLinks'>
                    <h1>social Links</h1>snvlsnlvnsl
                    <div className='Linkswapper'>
                    <a href='' className='facebook'><FontAwesomeIcon icon={faFacebook}  /></a>
                    <a href='' className='instagram'><FontAwesomeIcon icon={faInstagram}  /></a>
                    <a href='' className='youtube'><FontAwesomeIcon icon={faYoutube}  /></a>
                    <a href='' className='linkden'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href='' className='twitter'><FontAwesomeIcon icon={faTwitter}  /></a>
                    </div>
                </div>
            </div>
            <div className='bottomWapper'>
                <div className='copyright'><p>Copyright ©2022 All rights reserved |</p><a href="mailto:itskaifali22@gmail.com">Xhunter</a></div>
                <div className='subWapper'>
                <a href='https://www.facebook.com/profile.php?id=100052956766598' target="blank" className='facebook'><FontAwesomeIcon icon={faFacebook}  /></a>
                <a href='https://www.linkedin.com/in/xultra-hunter-8681b421a/' target="blank" className='linkden'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://twitter.com/HUNNTER09' target="blank" className='twitter'><FontAwesomeIcon icon={faTwitter}  /></a>
                <a href='' className='github'><FontAwesomeIcon icon={faGithub} /></a>
                <a href='mailto:itskaifali22@gmail.com' className='google'><FontAwesomeIcon icon={faGoogle}  /></a>
                <a href='' className='discord'><FontAwesomeIcon icon={faDiscord}  /></a>
                </div>
            </div>
        </section>
    )
}   


const ContactInfoPart = (props) =>{
    return(
        <React.Fragment>
            <span><LocationOnRoundedIcon className='icon' /> <p>{props.address}</p></span>
            <span><PhoneInTalkRoundedIcon  className='icon' /><a href='tel:03132163191'>{props.phone}</a></span>
            <span><AlternateEmailRoundedIcon className='icon' /><a href='mailto:xultrahunter555@gmail.com'>{props.email}</a></span>
        </React.Fragment>
    )
}

export default FooterSec