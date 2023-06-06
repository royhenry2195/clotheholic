import React from 'react'
import favourite from '../../Images/favourite.png'
import cart from '../../Images/cart.png'
import search from '../../Images/search.png'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '../../utils/tokenUtils'

export default function Navbar() {
    const navigate = useNavigate();
    const token = getToken();

    const handleNavigation = () => {
        if (token) {
            navigate('/')
            removeToken()
            localStorage.setItem("userDetails", null)
        } else {
            navigate('/login')
        }
    }

    return (
        <nav style={{ paddingLeft: '10%', paddingRight: '10%', height: 80 }}>
            <div className="navbar-brand">
                <span>Clothaholic</span>
            </div>
            {/* <input className="search-bar" type="text" placeholder="Search" /> */}
            <div className="search-bar">
                <img src={search} className="search-icon" />
                <input type="text" placeholder="Search" style={{ border: 0 }} />
            </div>
            <div className="navbar-icons">
                <button className='login-btn' onClick={() => handleNavigation()}>{token ? "Logout" : "Login"}</button>
                <img src={favourite} className='favorite-icon' />
                <img src={cart} className='cart-icon' />
            </div>
        </nav>
    )
}
