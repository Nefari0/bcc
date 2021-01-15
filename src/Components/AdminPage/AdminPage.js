import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminPage.css';
import ListItem from './ListItem'

const AdminPage = (props) => {
    const [products, setProducts] = useState([])

    function addProduct(){
        alert('click happend')
    }
    useEffect(() => {
        // axios.get('/api/products/all').then(res => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {

            setProducts(res.data.results)

        })
    }, [])


    return (
        <div className="main">

            <section className="segment">
                <div className="title"><h2>Orders</h2></div>
                {products.map((element, index) =>{
                    return <ListItem name={element.name} key={index}/>
                })}
            </section>

            <section className="segment">
                <Link to={"addprod"}><h2>make new product</h2></Link>
            </section>
            <section className="segment">3</section>
            <section className="segment">4</section>
        </div>
    )
}

export default AdminPage