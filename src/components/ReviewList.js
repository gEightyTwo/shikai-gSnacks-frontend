import React from 'react'
import Review from './Review'

const ReviewList = ({currReviews}) => {
  const Reviews = currReviews.map(review => {
    return (
      <Review
        key={review.id}
        review={review}
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
