import React from 'react'

export default function MenuDivs(props) {
    return(
        <div>
            {/* {console.log(props.menu.category)} */}
            <h3>{props.menu.name}</h3>
            <p>{props.menu.category}</p>
        </div>
    )
}