import React, { useEffect, useState } from 'react'
import './ShoppingCatogories.css'
import ShoppingCategory from '../../components/shopping_catogory/ShoppingCategory';
import { get } from '../../utils/Api';

function ShoppingCatogories() {

    const [categories, setCategories] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get('/api/products');
                const data = response.products.map(item => item.category)
                const uniqueCategories = [...new Set(data)];
                setCategories(uniqueCategories);
            } catch (error) {
                // Handle error
            }
        };

        fetchData();
    }, []);

    if (categories === null) return null

    return (
        <div className='cards-container'>
            {
                categories.map((item, index) => {
                    return (
                        <ShoppingCategory key={index} name={item} imageUrl={''} />
                    )
                })}


        </div>
    )
}

export default ShoppingCatogories
