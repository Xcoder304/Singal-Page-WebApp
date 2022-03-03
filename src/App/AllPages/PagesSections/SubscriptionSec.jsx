import React from 'react'

let SubscriptionSec = () =>{
    return(
        <section className='subscriptionSection'>
            <div className='subContainer'>
            <div className='wapper'>
                <div className='info'>
                    <h2>Our job is keep updated you</h2>
                    <h4>for more updates subscribe us</h4>
                    <form onSubmit={(event)=>event.preventDefault()}>

                        <input type="email" placeholder='wanna subscribe....?' required />
                        <button>subscribe</button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}

export default SubscriptionSec