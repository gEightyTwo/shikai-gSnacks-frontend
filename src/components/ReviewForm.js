import React from "react";
import { Modal, Button } from 'react-bootstrap'

const ReviewForm = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{props.currSnack.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
      />
      {
          <form>
          <label>
          Title
          <input type="text" name='title'/>
          </label>
        <label>
            Rating
            <input type='number' name='rating'/>
        </label>
        <label>
        Comments
        <input type="text"/>
        </label>
        <input type="submit" value='submit'/>
          </form>
      }
      <Modal.Footer>
        <Button onClick={props.handleCardClose}>Close</Button>
      </Modal.Footer>
    </div>
  );
};

export default ReviewForm