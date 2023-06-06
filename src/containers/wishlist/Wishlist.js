import React from 'react'
import "./Wishlist.css"

export default function Wishlist() {
    return (
        <div className='wishlist-container'>
            <h2 className='header-title'>My Wishlist </h2>
            <div className="wishlist-cards">
                <img className='card-img' src='https://5.imimg.com/data5/BV/JM/MS/SELLER-11618089/eeb39b39-73762-z5lghg-1000x1000.jpg' alt='wishlistimg' />
                <h3>Men Premium Jacket</h3>
                <p className='cls-price'> ₹ 2000</p>
                <button className='cls-movebtn'>Move to Cart</button>
            </div>
        </div>
    )
}
