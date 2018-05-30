import React from "react";
import { Modal } from "react-bootstrap";
import SnackDescription from './SnackDescription'
import ReviewForm from './ReviewForm'

const CardModal = (props) => {
  return (
    <div>
      <Modal show={props.cardShow} onHide={props.handleCardClose}>
      {props.addReview ? <ReviewForm {...props}/> : <SnackDescription {...props}/>}
      </Modal>
    </div>
  );
};

export default CardModal;
