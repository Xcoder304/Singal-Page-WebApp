import React from 'react'
import PrincingCart from "./SectionsComponents/PricingSecCard";
import PricingCardData from "./Data/PricingSecCardData"

let PricingSection = () =>{
    return(
        <section className='pricingSection'>
          <div className='titles'>
            <h1>Our best pricing plans for you</h1>
        </div>
        <div className='cardContainer'>
            <div className='cardWapper'>
                {
                    PricingCardData.map(data=>{
                        return(
                            <PrincingCart key={data.id} {...data}  />
                        )
                    })
                }
            </div>
        </div>
        </section>
    )
}

export default PricingSection