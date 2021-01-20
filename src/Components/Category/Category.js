import React, { Component } from 'react';
import './Category.css'

export default function Category(props) {
    // console.log('this is props',props.menu.product_id)
    const { photo_url } = props.menu
    return(
        <div className={`square ${props.toggleFn ? false : 'hide-Square'}`} onClick={() => props.toggleOpenFn()}>

            <img src={photo_url} className={`pic ${props.toggleFn ? false : 'small-pic'}`} />
            {console.log(props.toggleFn)}

        </div>

    )
}   