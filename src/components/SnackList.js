import React from 'react'
import { CardDeck } from 'reactstrap';
import Snack from './Snack'
import 'bootstrap/dist/css/bootstrap.css'

const SnackList = ({snackData, handleCardShow}) => {
  const Snacks = snackData.map(snack => {
    return (
      <Snack
        key={snack.id}
        snack={snack}
        handleCardShow={handleCardShow}
      />
    )
  })

    return (
      <CardDeck>
        {Snacks}
      </CardDeck>

    )
}

export default SnackList
