import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminPage.css';
import ListItem from './ListItem'
// import { usersOnly } from '../../../server/middleware/authMiddleware';

const AdminPage = (props) => {
    const [products, setProducts] = useState([])
    const [ orders, setOrders ] = useState([])
    const [ users, setUsers ] = useState([])

    function addProduct(){
        alert('click happend')
    }
    useEffect(() => {
        // axios.get('/api/products/all').then(res => {
            axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
            setProducts(res.data.results)
        })
        axios.get('/api/products/all').then((res) => {
            setUsers(res.data)
        })
        axios.get('/api/orders/all').then((res) => {
            setOrders(res.data)
        })

    }, [])


    return (
        <div className="main">

                <div className=""><h2>Orders</h2></div>
            <section className="segment">
                {products.map((element, index) =>{
                    return <ListItem name={element.name} key={index}/>
                })}
            </section>

            <section className="segment">
                <Link to={"addprod"}><h2>make new product</h2></Link>
                <Link to={"addprod"}><h2>edit products</h2></Link>
            </section>

            <section className="segment">
            <div className=""></div>
                {users.map((element, index) =>{
                    return <ListItem name={element.name} key={index}/>
                })}
            </section>
                
            <section className="segment">
            <div className=""></div>
                {orders.map((element, index) =>{
                    return <Link to={"/menu/:id"}><ListItem name={element.user_id} key={index}/></Link>
                })}
            </section>
        </div>
    )
}

export default AdminPage