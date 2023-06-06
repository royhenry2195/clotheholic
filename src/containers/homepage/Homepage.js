import React, { useEffect } from 'react'
import './Homepage.css'
import ShoppingCatogories from '../shopping_catogories/ShoppingCatogories'
import homePic from "../../Images/homePic.jpg"
import Collections from '../collections/Collections'
import { get } from '../../utils/Api'
import { Link, useNavigate } from 'react-router-dom'
// import SignUp from '../signup/SignUp'
// import Login from "../login/Login"
// import CartPage from '../cartpage/CartPage'

function Homepage() {
    const navigate = useNavigate();

    const renderCarousel = () => {
        return (
            <div className='homeImgCls'>
                <img src={homePic} alt='homePic' className='imgSelf' />
                <button className='shopnow-btn' onClick={() => navigate('/products')}>Shop Now</button>
            </div>
        )
    }
    return (
        <>
            <div className='container'>
                <Link to={'/mockman'}>Go to mockman</Link>
                <ShoppingCatogories />
                {renderCarousel()}
                {/* <Collections /> */}
            </div>

        </>
    )
}

export default Homepage
