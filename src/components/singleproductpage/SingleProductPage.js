import React, { useEffect, useState } from 'react'
import './SingleProductPage.css'
import { useNavigate, useParams } from 'react-router-dom';
import { get, post } from '../../utils/Api';


export default function SingleProductPage({ navigation }) {
    const params = useParams();
    const navigate = useNavigate();
    const [cartValue, setCartValue] = useState(1);
    const [stock, setStock] = useState(5);
    const [product, setProduct] = useState([]);

    const fetchData = async () => {
        try {
            const response = await get(`/api/products/${params.id}`);
            console.log('response::', response)
            if (response != null) {
                setProduct(response.product);
            }
        } catch (error) {
            // Handle error
        }
    };

    const fetchCartData = async () => {
        try {
            const response = await get(`/api/user/cart`);
            console.log('fetchCartData response::', response)
        } catch (error) {
            // Handle error
        }
    };

    const addToCartData = async (product) => {
        try {
            //const data = {
            //     product: {
            //         "_id": 1,
            //         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            //         "price": 109.95,
            //         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            //         "category": "men's clothing",
            //         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            //         "rating": {
            //             "rate": 3,
            //             "count": 120
            //         }
            //     }
            // }
            const response = await post(`/api/user/cart`, product);
            console.log('addToCartData response::', response)
        } catch (error) {
            // Handle error
        }
    };

    const moveToWishlist = async (product) => {
        try {
            const response = await post(`/api/user/wishlist`, product);
            console.log('addToCartData response::', response)
        } catch (error) {
            // Handle error
        }
    }

    useEffect(() => {
        fetchData();
        // fetchCartData()
    }, []);


    const handleMinus = () => {
        cartValue > 1 ? setCartValue(cartValue - 1) : setCartValue(1);
    }

    const handlePlus = () => {
        cartValue < stock ? setCartValue(cartValue + 1) : setCartValue(stock);
    }
    return (
        <div className='single-card-item'>
            <div className='single-card-item-img'>
                <img className='card-image' src={product.image} alt='carditemimg' />
            </div>
            <div className='single-card-item-details'>
                <label> {product.title}</label>
                <label className='lbl-offprice'> ₹ {product.price}  <span className='lbl-linethrough'> ₹ 3999</span></label>
                <label className='offpercentage'> 50% off</label>
                <div className='quantity-container'>
                    <label> Quantity : </label>
                    <div className='quantity-button-container'>
                        <button onClick={handleMinus} className='btn-minus'> - </button>
                        <label className='lbl-itemsIncDec'> {cartValue} </label>
                        <button onClick={handlePlus} className='btn-plus'> + </button>
                    </div>
                </div>


            </div>

            <div>
                <button className='btn-remove' onClick={() => addToCartData(product)}> Add To Cart</button>

                <button className='btn-move' onClick={() => moveToWishlist(product)}> Move to Wishlist</button>

                <button className='btn-move' onClick={() => navigate('/cart')}> Go To Cart</button>
            </div>
        </div>
    )
}
