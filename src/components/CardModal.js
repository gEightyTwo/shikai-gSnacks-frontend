import React from "react";
import { Modal } from "react-bootstrap";
import SnackDescription from './SnackDescription'
import ReviewForm from './ReviewForm'
import EditReviewForm from './EditReviewForm'


const CardModal = (props) => {
  return (
    <div>
      <Modal show={props.cardShow} onHide={props.handleCardClose}>
      {props.addReview ? <ReviewForm {...props}/> : null}
      {props.editReview ? <EditReviewForm {...props}/> : null}
      {!props.addReview && !props.editReview ? <SnackDescription {...props}/> : null}

      </Modal>
    </div>
  );
};

export default CardModal;
