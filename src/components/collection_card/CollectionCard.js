import React from 'react'
import './CollectionCard.css'
import cardBackground from '../../Images/cardBackground.png'

function CollectionCard({ imageUrl, category, name, description }) {
    return (
        <div className="summer-collection-card">
            <img className='summer-collection-card-image' src={cardBackground} alt={name} />
            <div className="summer-collection-card-details">
                <h2 className="summer-collection-card-category">{category}</h2>
                <h3 className="summer-collection-card-title">{name}</h3>
                <h3 className="summer-collection-card-description">{description}</h3>
            </div>
        </div>
    )
}

export default CollectionCard