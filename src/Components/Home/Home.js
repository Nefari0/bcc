import React, { Component } from 'react';
import './Home.css';
import Categories from '../Categories/Categories'
import { HashRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import { requestProducts } from './../../ducks/productsReducer'
import { getUserInfo,sendUserInfo } from './../../ducks/userReducer'
const Nexmo = require('nexmo');

// import authMiddleware from './'


// export default class Home extends Component {
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleSignIn:false,
            email: '',
            password: '',
            user:{},
            reduxStuf:{},
            text:'',
            phone:''
            // text:{
            //     recipient:'',
            //     textMesage:'this is a text message'
            // }
        };
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.sendText = this.sendText.bind(this);
        this.handlePhoneNum = this.handlePhoneNum.bind(this);
        this.updateUser = this.updateUser.bind(this);

    }

    componentDidMount(){
        this.props.getUserInfo()
        // console.log('this is the object',this.props.products)
        

        }


    updateUser(user) {
        this.props.getUserInfo(user)
        console.log('this is from updateUser func',user)
        this.setState({
            user,
        })
    }

    // --------the code below uses twilio services----------
    // sendText(){
    //     const { text } = this.state

    //     fetch(`http://localhost:4003/send-text?recipient=${text.recipient}&textmessage=${text.textMesage}`).catch(err => console.log('this is fired from setText()',err))
    // }

    // sendText() {
    //     axios.get('/api/nexmo/confirm').then(() =>{}).catch(err => {
    //         alert('sendText() didnt work properly')
    //     })
    // }

    sendText(){
        const { phone } = this.state
        const nexmo = new Nexmo({
        apiKey: 'fefd29c7',
        apiSecret: 'l45DS0d33Gp89T20',
        });

        const from = '14793800458';
        // const to = '13852506288';
        const to = `1${phone}`;
        const text = "Welcome to Britany's Culinary Creations";

        nexmo.message.sendSms(from, to, text);
    }

    handlePhoneNum(value){
        // const { text } = this.state
        this.setState({ phone : value })
    }

    handleEmailInput(value) {
        this.setState({ email: value })
    }

    handlePasswordInput(value) {
        this.setState({ password:value})
    }

    register(){
        const { email, password, phone } = this.state;
        this.sendText()
        axios.post('/auth/register', { email, password, phone } ).then(user => {
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
        const { email,password,text,user,phone } = this.state;
        const { sendUserInfo } = this.props;

        return(
            <HashRouter>
            <div>
            <section className="home">
                
                {user.username ? (
                    <h1>{user.username}, Welcome to Brittany's Culinary Creations!</h1>
                ) : (
                    <h1>Brittany's Culinary Creations</h1>
                )}


                <a class="btn btn-full" href="#"><Link to="/cats" style={{textDecoration:'none',color:'white'}}>Menu</Link></a>
                {user.username ? (<a class="btn btn-ghost" href="#" onClick={this.logout}>Logout</a>) : (<a class="btn btn-ghost" href="#" onClick={this.login}>Sign In</a>)}

                <div className="sign-in">
                    <input placeholder="email" type="text" value={email} onChange={e =>this.handleEmailInput(e.target.value)}></input>
                    <input placeholder="password" type="password" value={password} onChange={e => this.handlePasswordInput(e.target.value)}></input>
                    <input placeholder="phone number" type="text" value={phone} onChange={e => this.handlePhoneNum(e.target.value)}></input>
                </div>
                {user.username ? (<p></p>) : (<p className="register" onClick={this.register}>join now!</p>)}                
                
                 {user.username ? (<p className="register" onClick={this.logout}>log out</p>) : (<p></p>)}
                 {user.username ? (<p className="register" onClick={this.logout}>shopping cart</p>) : (<p></p>)}
                 {user.isAdmin ? (<Link to="/admin" style={{textDecoration:'none'}} ><p className="register" >admin page</p></Link> ) : (<p></p>)}
    
            </section>

            </div>
            </HashRouter>
        )
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {requestProducts,getUserInfo,sendUserInfo})(Home)
