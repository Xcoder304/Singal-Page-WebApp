import React from 'react'

const ContactusSec = () =>{
    return(
        <section className='contactUsSection'>
            <div className='titles'>
            <h1 style={{fontSize:"4rem"}}>Contact Us</h1>
            </div>
            <div className='ContactusContainer'>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type='text' placeholder='Full Name..' autoComplete='off' required />
                    <input type='email' placeholder='Email...'  autoComplete='off' required/>
                    <input type='text' placeholder='Subject..' autoComplete='off' required />
                    <textarea placeholder='Description' required></textarea>
                    <div className='buttonContainer'>
                        <button>Send <div className='subcontainer'></div></button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactusSec