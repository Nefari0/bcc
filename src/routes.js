import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import Category from './Components/Category/Category';
import Header from './Components/Header/Header'
import AdminPage from './Components/AdminPage/AdminPage';
import EditProduct from './Components/AdminPage/EditProducts';
import AddProduct from './Components/AdminPage/AddProduct';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cats/:id" component={Category}/>
        <Route path="/cats" component={Categories}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/addprod" component={AddProduct}/>
        <Route path="/products/:product_id" component={EditProduct}/>
    </Switch>
)