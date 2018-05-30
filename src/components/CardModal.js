import React from "react";
import { Modal } from "react-bootstrap";
import SnackDescription from './SnackDescription'

const CardModal = (props) => {
  return (
    <div>
      <Modal show={props.cardShow} onHide={props.handleCardClose}>
        <SnackDescription {...props}/>
      </Modal>
    </div>
  );
};

export default CardModal;
