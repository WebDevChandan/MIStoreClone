import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReviews.css'

const ProductReviews = ({ productReviews }) => {
    return (
        <div className="ProductReviews">
            {productReviews.map((item, index) => (
                <ProductReviewCard key={item.image} name={item.name} image={item.image} review={item.review} price={item.price} index={index} />
            ))}
        </div>
    )
}

export default ProductReviews