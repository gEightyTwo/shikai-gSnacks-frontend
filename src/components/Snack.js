import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const Snack = ({snack, handleCardShow}) => {
  const { description, id, img, is_perishable, name, price } = snack

  return (
    <div height='400px' className="col-xs-4 well">
    <Card>
        <CardImg width='100%' src={img} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button className='card-modal-button' bsStyle="primary" bsSize="large" onClick={handleCardShow}>
                    More
                </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Snack
