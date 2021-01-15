import React, { Component } from 'react';
import './Home.css';
import Categories from '../Categories/Categories'
import { HashRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import authMiddleware from './'


export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            toggleSignIn:false,
            email: '',
            password: '',
            user:{},
            welcome:''
        };
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);

    }

    updateUser(user) {
        console.log('this is from update user func',user)
        this.setState({
            user,
        })
    }

    handleEmailInput(value) {
        this.setState({ email: value })
    }

    handlePasswordInput(value) {
        this.setState({ password:value})
    }

    register(){
        const { email, password } = this.state;

        axios.post('/auth/register', { email, password } ).then(user => {
            this.setState({email:'',password:'' });
            this.updateUser(user.data)
        })
        .catch(err => {
            this.setState({ email:'', password:''});
            alert('there is a problem',err,err.response.response);
        });
    }

    login(){
        const { email, password } = this.state;

        axios.post('/auth/login', { email, password } )
        .then(user => {
            this.updateUser(user.data);
            this.setState({ email:'', password:''});
        })
        .catch(err => alert(err.response.request.response));
    }

    logout() {
        axios.get('/auth/logout').then(() => {
            this.updateUser({});
        })
        .catch(err => console.log(err));
        console.log('you are logged out')
    }

    render() {
        const { email,password } = this.state;
        const { user } = this.state;
        console.log('THIS IS USER!!!!!',user.isAdmin)

        return(
            <HashRouter>
            <div>
            <section className="home">

                {/* <h1>Brittany's Culinary Creations</h1> */}
                
                {user.username ? (
                    <h1>{user.username}, Welcome to Brittany's Culinary Creations!</h1>
                ) : (
                    <h1>Brittany's Culinary Creations</h1>
                )}


                <a class="btn btn-full" href="#"><Link to="/cats" style={{textDecoration:'none',color:'white'}}>Menu</Link></a>
                <a class="btn btn-ghost" href="#" onClick={this.login}>Sign In</a>

                <div className="sign-in">
                    <input placeholder="email" type="text" value={email} onChange={e =>this.handleEmailInput(e.target.value)}></input>
                    <input placeholder="password" type="password" value={password} onChange={e => this.handlePasswordInput(e.target.value)}></input>
                </div>
                <p className="register" onClick={this.register}>join now!</p>
                {/* <p className="register" onClick={this.logout}>log out</p> */}
                
                
                 {user.username ? (<p className="register" onClick={this.logout}>log out</p>) : (<p></p>)}
                 {user.isAdmin ? (<Link to="/admin"><p className="register" >admin page</p></Link> ) : (<p></p>)}

                 {/* <div className={`cat-list-hide ${user.isAdmin ? false : 'cat-list'}`}>
                    {mappedlist}
                </div> */}

                {/* {user.isAdmin ? true (<p className="register">admin testing</p>) : (<p></p>)} */}

             
                
                {/* <Link to="/admin"><p className="register" >admin page</p></Link> */}
    
            </section>

            </div>
            </HashRouter>
        )
    }
}