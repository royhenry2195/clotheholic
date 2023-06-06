import React, { useState, useEffect } from 'react'
import './Products.css'
import cardBackground from '../../Images/cardBackground.png'
import { get } from '../../utils/Api';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function Products() {
    const navigate = useNavigate();
    const params = useParams();

    const [products, setProducts] = useState(null);
    const [SliderPriceVal, setSliderPriceVal] = useState();
    const [category, setCategory] = useState(params.category || '')
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [star, setStar] = useState();
    const [sort, setSort] = useState();
    const [filterApplied, setFilterApplied] = useState(false);

    const fetchData = async () => {
        try {
            const response = await get('/api/products');
            console.log('response::', response)
            if (category) {
                const data = response.products.filter((item) => item.category === category)
                setProducts(data);
            } else {
                setProducts(response.products);
            }
        } catch (error) {
            // Handle error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        setSliderPriceVal(parseInt(event.target.value));
    };

    const handleCheckboxChange1 = (event) => {
        setIsChecked1(event.target.checked);
    }
    const handleCheckboxChange2 = (event) => {
        setIsChecked2(event.target.checked);
    }

    const handleRadioChange = (event) => {
        setStar(event.target.value);
    };

    const filterSort = (event) => {
        setSort(event.target.value);
    }

    const handleFilter = () => {
        setFilterApplied(true);
        let filteredData = [...products]
        if (SliderPriceVal) {
            console.log('gone here::')
            filteredData = products.filter((product) => product.price <= SliderPriceVal);
        }
        if (isChecked1) {
            console.log('gone here::1')
            filteredData = filteredData.filter((product) => product.category === "men's clothing");
        }
        if (isChecked2) {
            console.log('gone here::2')
            filteredData = filteredData.filter((product) => product.category === "women's clothing");
        }
        if (star) {
            console.log("filteredData:::", filteredData)
            filteredData = filteredData.filter((product) => product.rating.rate === parseInt(star));
            console.log("filteredData:::1", filteredData)
        }
        if (sort === "asc") {
            filteredData = filteredData.sort((a, b) => a.price - b.price);
        }
        if (sort === "desc") {
            filteredData = filteredData.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(filteredData);
        console.log("filteredDataEnd:::", filteredData)
    }

    const handleClear = () => {
        setSliderPriceVal(null);
        setIsChecked1(false);
        setIsChecked2(false);
        setStar(null);
        setSort(null);
        setFilterApplied(false);
    }



    if (products === null) return <div>Loading...</div>

    return (
        <div className="all-products-page">
            <div className="filter-options">

                <div className='filter-header' >
                    <label className='lbl-filter'>Filters</label>
                    <u onClick={handleClear}> Clear </u>
                </div>
                <div className="filter-price">
                    <h3>Price </h3>
                    <div className="price-range-num">
                        <span>50</span>
                        <span>150</span>
                        <span>200</span>
                    </div>
                    <input
                        type="range"
                        min={50}
                        max={200}
                        step={10}
                        value={SliderPriceVal}
                        onChange={handleChange}
                        className='filter-range-input'
                    />
                </div>
                <div className="filter-section">
                    <h3>Category</h3>
                    <label className='cls-category'>
                        <input type="checkbox" className='category-label' value="category1"
                            checked={isChecked1}
                            onChange={handleCheckboxChange1} />
                        Men Clothing
                    </label>
                    <label className='cls-category'>
                        <input type="checkbox" className='category-label' value="category2"
                            checked={isChecked2}
                            onChange={handleCheckboxChange2} />
                        Women Clothing
                    </label>
                    {/* Category checkboxes */}
                </div>
                <div className="filter-section">
                    <h3>Rating</h3>
                    {/* Rating radio buttons */}
                    <label className='cls-rating'>
                        <input className='category-label' type="radio" name="rating" value="4"
                            checked={star === '4'}
                            onChange={handleRadioChange} />
                        4 Star & above
                    </label>
                    <label className='cls-rating'>
                        <input className='category-label' type="radio" name="rating" value="3"
                            checked={star === '3'}
                            onChange={handleRadioChange} />
                        3 Stars & above
                    </label>
                    <label className='cls-rating'>
                        <input className='category-label' type="radio" name="rating" value="2"
                            checked={star === '2'}
                            onChange={handleRadioChange} />
                        2 Stars & above
                    </label>
                    <label className='cls-rating'>
                        <input className='category-label' type="radio" name="rating" value="1"
                            checked={star === '1'}
                            onChange={handleRadioChange} />
                        1 Stars & above
                    </label>
                </div>
                <div className="filter-section">
                    <h3>Sort By</h3>
                    <label className='cls-price'>
                        <input className='radio category-label' type="radio" name="sort" value="asc" onChange={filterSort}
                            checked={sort === 'asc'}
                        />
                        Price - Low to High
                    </label>
                    <label className='cls-price'>
                        <input className='radio category-label' type="radio" name="sort" value="desc" onChange={filterSort}
                            checked={sort === 'desc'} />
                        Price - High to Low
                    </label>
                    {/* Sort by radio buttons */}
                </div>

                <div>
                    <button className='btn-setFilter' onClick={handleFilter}>  Set Filter </button>
                </div>
            </div>
            <div className="product-list">
                <h2>All Products</h2>
                <div className="product-cards">
                    {
                        filterApplied && filteredProducts.length > 0 ?
                            filteredProducts.map((product) => {
                                return (
                                    <div key={product.id} className="product-card">
                                        <div className='card-badge'>
                                            <i className='red-fav material-icons-outlined'> favourite</i>
                                        </div>
                                        <img className='product-img' src={product.image} alt={product.name} />
                                        <div className='product-container'>
                                            <div className='product-title'>{product.title}</div>
                                            <div className='product-price'>${product.price}</div>
                                            <button onClick={() => navigate('/cart')}>Add To Cart</button>
                                        </div>
                                    </div>
                                )
                            }) : filterApplied ? <div>No data available</div> : null
                    }
                    {
                        !filterApplied && products.length > 0 && products.map((product) => {
                            return (
                                <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product._id}`)}>
                                    <img className='product-img' src={product.image} alt={product.name} />
                                    <div className='product-container'>
                                        <div className='product-title'>{product.title}</div>
                                        <div className='product-price'>${product.price}</div>
                                        <button onClick={() => navigate('/cart')}>Add To Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Products
