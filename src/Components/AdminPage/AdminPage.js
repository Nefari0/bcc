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
        axios.get('/api/users/all').then(res => {
            setUsers(res.data)
            // axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
            // setUsers(res.data.results)
        })
        axios.get('/api/products/all').then((res) => {
            setProducts(res.data)
        })
        axios.get('/api/orders/join').then((res) => {
            console.log('this is res',res.data)
            setOrders(res.data)
        }).catch((err) => {
            console.log('this is from joins',err)
        })
        // axios.get('/api/orders/all').then((res) => {
        //     setOrders(res.data)
        // })

    }, [])


    return (
        <div className="main">

            <section className="segment">
            <h3 className="admin-h3">product view</h3>
                {products.map((element, index) =>{
                    return <Link key={element.pruduct_id} to={`/products/${element.product_id}`}><ListItem name={element.name} key={index}/></Link>
                })}
            </section>

            <section className="segment">
            <h3 className="admin-h3">products manager</h3>
                <Link to={"addprod"}><h2>make new product</h2></Link>
                {/* <Link to={"addprod"}><h2>edit products</h2></Link> */}
            </section>

            <section className="segment">
            <h3 className="admin-h3">users</h3>
                {users.map((element, index) =>{
                    return <ListItem name={element.email} key={index}/>
                })}
            </section>
                
            <section className="segment">
            <h3 className="admin-h3">orders</h3>
                {orders.map((element, index) =>{
                    return <ListItem name={element.user_name} key={index}/>
                })}
            </section>
        </div>
    )
}

export default AdminPage