import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import EditForm from './EditForm';
import './AdminPage.css';

const EditProduct = (props) => {
    // const [ name, setName ] = useState('')
    const { product_id } = props.match.params
    const [ item, setItem ] = useState({})
    const [ price, setPrice ] = useState()


    function getItem(){
        axios.get(`/api/products/${product_id}`).then((res) => {
            console.log('this is params',props.match.params)
            setItem(...res.data)
        })
    }

    useEffect(() => {
        getItem()
        // axios.get(`/api/products/${product_id}`).then((res) => {
        //     console.log('this is params',props.match.params)
        //     setItem(...res.data)
        // })
    },[])

    function handlePrice(value){
        setPrice(value)
    }

    function editItemPrice() {
        axios.post(`/api/products/update/price/${product_id}`, { price } ).then(item => {
            getItem()
        })
    }

    // function addItem(){
    //     axios.post('/api/products', {name,product_description,price,category,photo_url} ).then(item => {
    //         setInfo('')
    //     })
    //     .catch(err => alert(err.response.request.response));
    // }
    

    return(
        <section className="main">
            {console.log('this is item',item.price)}
                <h2>edit item</h2>
            <div className="input-panel">
                <ul className="list">
                    {/* <li>names</li> */}
                <li><button className="button" onClick={editItemPrice}>apply change</button>{item.name}</li>
                <li><button className="button">applu change</button>{item.product_description}</li>
                <li><button className="button" onClick={editItemPrice}>apply change</button>{item.price}</li>
                <li><img className="edit-pic" src={item.photo_url}/></li>
                <li><button className="button">apply change</button>{item.category}</li>
                <li><input type="number" value={price} onChange={e => handlePrice(e.target.value)}></input></li>
                </ul>
                {/* <h2>{price}</h2> */}
                {/* <EditForm/> */}
                
            </div>
        </section>
    )
}

export default EditProduct
