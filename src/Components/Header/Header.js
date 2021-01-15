import { useState } from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

export default function Header(props) {
    // const [ toggle=true, setToggle ] useState([])

    return(
        
        <header className="app">
            <h3>I AM THE LOGO</h3>
            <nav className="nav-bar">
                <div className="links">
                    <Link to="/"><p className="nav-item" style={{textDecoration:'none',color:'white'}}>HOME</p></Link>
                    <Link to="/cats" style={{textDecoration:'none',color:'white'}}><p className="nav-item">CATEGORIES</p></Link>
                    <p className="nav-item">LINK</p>
                    <p className="nav-item">LINK</p>
                    <p className="nav-item">LINK</p>
                </div>
            </nav>
        </header>

        
    )

}