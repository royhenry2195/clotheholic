import React from 'react'
import cardBackground from '../..//Images/cardBackground.png'
import './ShoppingCategory.css'
import { useNavigate } from 'react-router-dom';

function ShoppingCategory({ name, imageUrl }) {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/products/${name}`)}>
            {/* <img src={cardBackground} alt={name} className="card-image" /> */}
            <h2 className="card-name">{name}</h2>
        </div>
    )
}

export default ShoppingCategory
