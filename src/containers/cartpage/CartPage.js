import React, { useEffect, useState } from 'react'
import "./CartPage.css"
import { NavLink } from 'react-router-dom';
import { get, post } from '../../utils/Api';

export default function CartPage() {

    const [cartValue, setCartValue] = useState(1);
    const [stock, setStock] = useState(5);
    const [products, setProduct] = useState([]);

    const fetchCartData = async () => {
        try {
            const response = await get(`/api/user/cart`);
            console.log('fetchCartData response::', response)
            setProduct(response.cart)
        } catch (error) {
            // Handle error
        }
    };

    useEffect(() => {
        fetchCartData()
    }, []);

    const handleRemoveItem = () => {

    }

    const handleMinus = () => {
        cartValue > 1 ? setCartValue(cartValue - 1) : setCartValue(1);
    }

    const handlePlus = () => {
        cartValue < stock ? setCartValue(cartValue + 1) : setCartValue(stock);
    }
    return (
        <>
            <div className='cart-container'>
                <label className='lbl-myCart'>  MY CART ({1}) </label>

                <div className='card-container'>
                    <div className='card-item-container'>
                        {
                            products.length > 0 && products.map((item) => {
                                return (
                                    <div className='card-item'>

                                        <div className='card-item-img'>
                                            <img className='card-image' src='https://5.imimg.com/data5/BV/JM/MS/SELLER-11618089/eeb39b39-73762-z5lghg-1000x1000.jpg' alt='carditemimg' />
                                        </div>
                                        <div className='card-item-details'>
                                            <label> Men Premium Jacket</label>
                                            <label className='lbl-offprice'> ₹ 2000  <span className='lbl-linethrough'> ₹ 3999</span></label>
                                            <label className='offpercentage'> 50% off</label>
                                            <div className='quantity-container'>
                                                <label> Quantity : </label>
                                                <div className='quantity-button-container'>
                                                    <button onClick={handleMinus} className='btn-minus'> - </button>
                                                    <label className='lbl-itemsIncDec'> {cartValue} </label>
                                                    <button onClick={handlePlus} className='btn-plus'> + </button>
                                                </div>
                                            </div>

                                            <button className='btn-remove' onClick={() => handleRemoveItem}> Remove From Cart</button>

                                            <NavLink to="/wishlist">
                                                <button className='btn-move'> Move to Wishlist</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='card-priceDetail-container'>
                        <label className='lbl-price'> PRICE DETAILS </label>
                        <hr />

                        <div className='card-price-items'>
                            <label > Price  </label>
                            <label >₹ 1000  </label>
                        </div>

                        <div className='card-price-items'>
                            <label > Discount  </label>
                            <label > ₹ 1000  </label>
                        </div>

                        <div className='card-price-items'>
                            <label > Delivery Charges  </label>
                            <label > ₹ 1000  </label>
                        </div>

                        <hr />

                        <div className='card-price-items'>
                            <label className='lbl-total'> TOTAL AMOUNT :   </label>
                            <label > ₹ 1000  </label>
                        </div>

                        <hr />

                        <div className='card-price-items'>
                            <label > You will save ₹ 1000 on this order  </label>
                            <label > ₹ 1000  </label>
                        </div>

                        <button className='btn-placeOrder'> PLACE ORDER </button>

                    </div>
                </div>
            </div>
        </>
    )
}
