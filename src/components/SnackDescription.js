import React from 'react'
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import ReviewList from "./ReviewList";
import { withAuthentication } from "../helper";

const SnackDescription = ({
    handleCardClose,
    handleCardShow,
    cardShow,
    currSnack,
    currReviews,
    handleReviewFormShow,
    handleEditReviewFormShow,
    handleDeleteReview,
    authState,
    authStatePending
}) => {
  const calcAvgRating = () => {
    // If no reviews, defaults to 5.00
    if(currReviews.length===0) return 5.00
    let sum = 0
    currReviews.forEach(review => {
      sum+=review.rating
    })
    const avg = (sum/currReviews.length).toFixed(2)
    return avg
  }

  const imgCropStyle = {
      height: '250px',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
  }

  const reviewTitleStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 10px 0'
  }

  return(
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{currSnack.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
      >
        <Row>
          <Col xs={6} md={6}>
            <div style={imgCropStyle}>
              <Image height='100%' width='auto' src={currSnack.img} />
            </div>
          </Col>
          <Col xs={6} md={6}>
            <h4>Description</h4>
            <p>{currSnack.description}</p>
          </Col>
        </Row>
        <div style={reviewTitleStyle}>
          <h4>
            Average Rating: {calcAvgRating()}/5.00
          </h4>
          {authState && !authStatePending ? (
            <Button
              onClick={handleReviewFormShow}
              >Add Review
            </Button>) : null}
        </div>

        <ReviewList
          currReviews={currReviews}
          handleEditReviewFormShow={handleEditReviewFormShow}
          handleDeleteReview={handleDeleteReview}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCardClose}>Close</Button>
      </Modal.Footer>
    </div>
  )
}



export default withAuthentication(SnackDescription)
