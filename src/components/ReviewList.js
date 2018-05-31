import React from 'react'
import Review from './Review'

const ReviewList = ({currReviews, handleDeleteReview}) => {
  const Reviews = currReviews.map(review => {
    return (
      <Review
        key={review.id}
        review={review}
        handleDeleteReview={handleDeleteReview}
      />
    )
  })

    return (
      <div className='reviews-container'>
        {Reviews}
      </div>
    )
}

export default ReviewList
