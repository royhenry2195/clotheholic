import React from 'react'
import './Collections.css'
import CollectionCard from '../../components/collection_card/CollectionCard';

const data = [
    {
        category: 'New Arrival',
        name: "Summer Collections",
        description: "Check out our best winter collection to stay warm in style this season",
        imageUrl: "path/to/image1.jpg",

    },
    {
        category: 'New Arrival',
        name: "Women",
        description: "Check out our best winter collection to stay warm in style this season",
        imageUrl: "path/to/image2.jpg"
    }
];

function Collections() {
    return (
        <div className='summer-collection'>
            {data.map(item => <CollectionCard name={item.name} category={item.category} description={item.description} imageUrl={item.imageUrl} />)}

        </div>
    )
}

export default Collections
