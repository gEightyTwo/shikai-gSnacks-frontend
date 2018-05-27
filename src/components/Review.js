import React from 'react'
import { Panel } from 'react-bootstrap'

const Review = ({review}) => {
  const {id, title, text, rating, snacks_id, users_id} = review
  return (
    <div>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{title} by User Id: {users_id}</Panel.Title>
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

export default Review
