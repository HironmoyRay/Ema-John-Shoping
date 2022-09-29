import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img}  ></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: $ {price} </p>
                <p><small>Seller: {seller}</small> </p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='cart-btn'>
                <p>Add to Cart...</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;