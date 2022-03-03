import React from 'react'

let Card = (props) =>{
    return(
        <div className='card'>
        <div className='imageContainer'>
        <div className='imageWapper'>
            <img src={props.image} />
        </div>
        </div>
        <div className='info'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default Card