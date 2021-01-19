import axios from 'axios'
import'./UserPage.css'
import { useState, useEffect } from 'react'
import OrderItem from './OrderItem'

function UserPage(props) {
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        axios.get('/api/orders/users').then((res) => {
            setOrders(res.data.results)
        })
    },[])

    return(
        <div>
            <section className="user-main">
                <h3>these are your orders</h3>
                {orders.map((element,index) =>{
                    return <OrderItem name={element.user_id} key={index}/>
                })}
            </section>
        </div>
    )
    
}

export default UserPage
