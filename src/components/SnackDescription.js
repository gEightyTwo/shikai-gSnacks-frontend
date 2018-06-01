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
    handleDeleteReview,
    authState,
    authStatePending
}) => {
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
              <Image src={currSnack.img} />
            </Col>
            <Col xs={6} md={6}>
              <h4>Description</h4>
              <p>{currSnack.description}</p>
            </Col>
          </Row>
          <h4>
            Reviews
            {authState && !authStatePending? (
            <Button
            onClick={handleReviewFormShow}
            >Add Review</Button>
            ) : null}
          </h4>
          <ReviewList
            currReviews={currReviews}
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
