import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
// import Contact from './Components/Contact/Contact'
import AdminPage from './Components/AdminPage/AdminPage'
import { HashRouter } from 'react-router-dom';
import routes from "./routes"

function App(props) {
  return (
    <HashRouter>
    <div className="App">
      <Header/>
      {/* <AdminPage/> */}
      {routes}
      {/* <Home/> */}
    </div>
    </HashRouter>
  );
}

export default App;
