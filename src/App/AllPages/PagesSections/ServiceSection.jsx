import React from 'react'
import Card from "./SectionsComponents/ServiceSecCard"
import CardData from "./Data/ServiceSecCardData"

let ServicePage = () =>{
    return(
        <section className='ServiceSection'>
        <div className='titles'>
            <h1>our high Quality Service's</h1>
        </div>
        <div className='cardContainer'>
        <div className='cardWapper'>
            {
                CardData.map(data=>{
                    return(
                        <Card 
                        key={data.id}
                        {...data}
                        />
                    )
                })
            }
        </div>
        </div>
        </section>
    )
}

export default ServicePage