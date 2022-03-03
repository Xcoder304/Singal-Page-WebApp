import React from 'react'

let PricingCard = (props)=>{
    let textFld;
    if(props.categroy.free){
        textFld = "free"
    }
    else if(props.categroy.basic){
        textFld = "basic"
    }
    else if(props.categroy.permium){
        textFld = "permium"
    }
    else if(props.categroy.ultimate){
        textFld = "ultimate"
    }
    else{
        textFld = ""
    }
    
    return(
        <div className='card'>
                    <div className={`catgroyName ${textFld}`}><h1>{textFld}</h1></div>
                    <div className='info'>
                        <div className='price'><h1>{props.price}</h1>$</div>
                        <div className='priceWapper'>
                            {props.features.map(info=>{
                                return(
                                    <React.Fragment>
                                    <span>{info.one}</span>
                                    <span>{info.two}</span>
                                    <span>{info.three}</span>
                                    <span>{info.four}</span>
                                    <span>{info.five}</span>
                                    <span>{info.six}</span>
                                    <span>{info.seven}</span>
                                    <span>{info.eight}</span>
                                    <span>{info.nine}</span>
                                    <span>{info.ten}</span>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className='buttonContainer'>
                        <button>Get Started <div className='subcontainer'></div></button>
                    </div>
                </div>
    )
}

export default PricingCard