import React from 'react'
import './Product.css'
function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>Rs.{price}/-</strong></p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <span role="img" aria-label="">⭐</span>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
