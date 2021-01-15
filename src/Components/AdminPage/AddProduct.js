import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import { addProduct } from '../../../server/controllers/productsController';
import './AdminPage.css';

const AddProduct = (props) => {
    const [ info, setInfo ] = useState('')
    const [ name, setName ] = useState('')
    const [ product_description, setDescription ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ category, setCategory ] = useState('')
    const [ photo_url, setPhoto ] = useState('')

    function handleNameInput(value){
        setName(value)
    }

    function handleDescription(params) {
        setDescription(params)
    }

    function handlePrice(params) {
        setPrice(params)
    }

    function handleCategory(params) {
        setCategory(params)
    }

    function handlePhoto(params) {
        setPhoto(params)
    }

    function addItem(){
        axios.post('/api/products', {name,product_description,price,category,photo_url} ).then(item => {
            setInfo('')
        })
        .catch(err => alert(err.response.request.response));
    }
    

    return(
        <section className="main">
                <h2>add a new item</h2>
            <div className="input-panel">
                <ul className="list">
                    <li className="list">name<input type="text" value={name} onChange={e => handleNameInput(e.target.value)}></input></li>

                    <li className="list">product description<input type="text" value={product_description} onChange={e => handleDescription(e.target.value)}></input></li>

                    <li className="list">price<input type="text" value={price} onChange={e => handlePrice(e.target.value)}></input></li>

                    <li className="list">category<input type="text" value={category} onChange={e => handleCategory(e.target.value)}></input></li>

                    <li className="list">photo<input type="text" value={photo_url} onChange={e => handlePhoto(e.target.value)}></input></li>

                    {/* <li className="list">name<input type="text" value={name} onChange={e => handleNameInput(e.target.value)}></input></li> */}

                    <li className="list"><button onClick={addItem}>ADD</button></li>
                </ul>
                
            </div>
        </section>
    )
}

export default AddProduct
