import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// import Contact from './Components/Contact/Contact'
import AdminPage from './Components/AdminPage/AdminPage'
import UserPage from './Components/UserPage/UserPage'
import { HashRouter } from 'react-router-dom';
import routes from "./routes"
import { ThisMonthPage } from 'twilio/lib/rest/api/v2010/account/usage/record/thisMonth';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user:{},
    };
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser(user) {
    this.setState({
      user,
    })
  }

  render() {
      return (
        <HashRouter>
        <div className="App">
          <Header/>
          {routes}
        </div>
        </HashRouter>
      );

  }
}

export default App;
