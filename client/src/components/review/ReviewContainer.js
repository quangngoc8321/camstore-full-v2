import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

const ReviewContainer = ({productId}) => {
    return (
        <>
            <ReviewList productId={productId} />
            <ReviewForm productId={productId} />
        </>
    )
}

export default ReviewContainer
