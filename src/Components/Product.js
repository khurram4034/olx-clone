import React from 'react'
import "../Components/Product.css";

function Product({ id, title, image, price}) {
    return (
        <div className='product'>
            <div>
                <p className='product__tag'>
                    FEATURED
                </p>
            </div>
            <img className='pic'
            src= {image} alt="" />
        
        <div className="product__info">
                <p className="product__price">
                    <strong>Rs </strong>
                    <strong> {price}</strong>
                    <p className='companey'>{title}</p>
                    <p className='date'>Date</p>
                </p>
                
            </div>
        </div>
    )
}

export default Product
