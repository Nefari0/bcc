import { useEffect, useState, React } from 'react'
import { connect } from 'react-redux'
import { sendUserInfo } from './../../ducks/userReducer'
import './Header.css';
import { Link } from 'react-router-dom'

function Header(props) {
    const [ isMenuOpen, setMenuOpen ] = useState(false)

    useEffect(() => {
        props.sendUserInfo()
    }, [])
    // props.sendUserInfo()

    function toggleMenu() {
        setMenuOpen(!isMenuOpen)
    }

    return(
        
        <header className="app">
            {console.log('hooks props',props)}
            {/* <h3 onClick={() => props.sendUserInfo()}>I</h3> */}
            <h3>{props.user1}</h3>
            <nav className="nav-bar">
                <div className="links">
                    <Link to="/"><p className="nav-item" style={{textDecoration:'none',color:'white'}}>HOME</p></Link>
                    <Link to="/cats" style={{textDecoration:'none',color:'white'}}><p className="nav-item">CATEGORIES</p></Link>
                    <p className="nav-item">ABOUT</p>
                    <p className="nav-item">LINK</p>
                    <p className="nav-item">CONTACT</p>
                    {/* <p className="menu">menu</p> */}
             
                </div>
                    
            </nav>
            <img onClick={toggleMenu} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"className="hamburger"/>

          <nav className={`mobile-nav ${isMenuOpen ? null : 'mobile-nav-hide'}`}>
          <Link to="/" style={{textDecoration:'none',color:'white'}}><p className="mobile-nav-item">HOME</p></Link>
          <Link to="/cats" style={{textDecoration:'none',color:'white'}}><p className="mobile-nav-item">CATEGORIES</p></Link>
          <p className="mobile-nav-item">ABOUT</p>
          <p className="mobile-nav-item">LINK</p>
          <p className="mobile-nav-item">CONTACT</p>
        </nav>
        </header>

        
    )
    
}
function mapStateToProps(state){
    return state
}
export default connect(mapStateToProps, {sendUserInfo})(Header)

// export default Header
