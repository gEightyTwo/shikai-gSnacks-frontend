import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const Snack = ({snack}) => {
  const { description, id, img, is_perishable, name, price } = snack

  return (
    <Col xs="3">
      <Card>
        <CardImg top width="100%" src={img} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>${price}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Reviews</Button>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Snack
