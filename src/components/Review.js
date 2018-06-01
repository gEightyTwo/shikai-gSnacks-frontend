import React from 'react'
import { Panel, Button } from 'react-bootstrap'
import { withAuthentication } from "../helper/index";
import '../style/Review.css'


const Review = ({review, handleEditReviewFormShow, handleDeleteReview, authState}) => {
  const {id, title, text, rating, snacks_id, users_id} = review
  return (
    <div>
      {console.log(handleEditReviewFormShow)}
      <Panel>
        <Panel.Heading>
<<<<<<< HEAD
          <Panel.Title componentClass="h3" className='review-header'>{title} by {authState.name}
            {authState && authState.id===users_id ?
              <span className='buttons-container'>
                <Button bsStyle="warning"
                  onClick={()=>handleEditReviewFormShow(id)}
                  >
                  Edit
                </Button>
                <Button bsStyle="danger"
                  onClick={()=>handleDeleteReview(snacks_id, id)}>
                  Delete
                </Button>
              </span>
            : null
          }
=======
          <Panel.Title componentClass="h3" className='review-header'>{title} by User Id: {users_id}

            <span className='buttons-container'>
              <Button bsStyle="warning">
                Edit
              </Button>
              <Button bsStyle="danger"
                onClick={()=>handleDeleteReview(snacks_id, id)}>
                Delete
              </Button>
            </span>
>>>>>>> a986a94c8a8d383617a9a92bd9ab0057811a6483
          </Panel.Title>

        </Panel.Heading>
        <Panel.Body>
          <div>
            {rating} stars
          </div>
          <div>
            {text}
          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default withAuthentication(Review)
